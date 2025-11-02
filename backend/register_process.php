<?php
// Memanggil file koneksi database kita
include 'db_connect.php';

// Mengatur header agar output berupa JSON
header('Content-Type: application/json');

// Variabel untuk menyimpan pesan respons
$response = array('success' => false, 'message' => '');

// Memastikan request method adalah POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['message'] = "Metode request tidak valid.";
    echo json_encode($response);
    if ($conn) $conn->close(); // Tutup koneksi jika ada
    exit();
}

// 1. Terima data dari formulir
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$confirm_password = isset($_POST['confirm_password']) ? $_POST['confirm_password'] : '';

// 2. Validasi Input Sederhana di Backend
if (empty($name) || empty($email) || empty($password) || empty($confirm_password)) {
    $response['message'] = "Semua kolom wajib diisi!";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = "Format email tidak valid!";
} elseif (strlen($password) < 6) {
    $response['message'] = "Password minimal harus 6 karakter!";
} elseif ($password !== $confirm_password) {
    $response['message'] = "Konfirmasi password tidak cocok!";
} else {
    // 3. Cek apakah email sudah terdaftar
    $stmt_check = null; // Inisialisasi variabel statement
    $stmt_insert = null; // Inisialisasi variabel statement
    try {
        $stmt_check = $conn->prepare("SELECT id FROM users WHERE email = ?");
        if ($stmt_check === false) throw new Exception("Prepare statement gagal (cek email): " . $conn->error);

        $stmt_check->bind_param("s", $email);
        $stmt_check->execute();
        $stmt_check->store_result();

        if ($stmt_check->num_rows > 0) {
            $response['message'] = "Email ini sudah terdaftar.";
        } else {
            $stmt_check->close(); // Tutup statement cek SEGERA setelah tidak dibutuhkan
            $stmt_check = null; // Reset

            // 4. Hash Password
            $password_hash = password_hash($password, PASSWORD_DEFAULT);
            if ($password_hash === false) throw new Exception("Gagal hashing password.");

            // 5. Simpan data pengguna baru
            $stmt_insert = $conn->prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)");
             if ($stmt_insert === false) throw new Exception("Prepare statement gagal (insert user): " . $conn->error);

            $stmt_insert->bind_param("sss", $name, $email, $password_hash);

            if ($stmt_insert->execute()) {
                $response['success'] = true;
                $response['message'] = "Registrasi berhasil! Silakan login.";
            } else {
                 // Tidak perlu throw exception di sini jika execute gagal, cukup set pesan error
                 $response['message'] = "Registrasi gagal saat menyimpan data.";
                 error_log("Execute statement gagal (insert user): " . $stmt_insert->error); // Log error
            }
            $stmt_insert->close(); // Tutup statement insert
            $stmt_insert = null; // Reset variabel
        }
        // Pastikan statement check ditutup jika belum (misal jika email sudah ada)
        if (isset($stmt_check) && $stmt_check instanceof mysqli_stmt) {
             $stmt_check->close();
             $stmt_check = null; // Reset variabel
        }

    } catch (Exception $e) {
        $response['message'] = "Terjadi kesalahan internal pada server.";
        error_log("Register Error: " . $e->getMessage()); // Log error untuk developer
        // Pastikan menutup statement jika sudah terdefinisi saat error terjadi
        if (isset($stmt_check) && $stmt_check instanceof mysqli_stmt) $stmt_check->close();
        if (isset($stmt_insert) && $stmt_insert instanceof mysqli_stmt) $stmt_insert->close();
    }
}

// Menutup koneksi database (jika masih terbuka)
if ($conn && $conn->ping()) {
    $conn->close();
}

// 6. Mengirim respons JSON
echo json_encode($response);
?>