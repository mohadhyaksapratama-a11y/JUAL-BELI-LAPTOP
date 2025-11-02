<?php
// Mulai Session: WAJIB di awal untuk mengingat status login
// Pastikan tidak ada output (echo, spasi, HTML) sebelum session_start()
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Memanggil file koneksi database
include 'db_connect.php';

// Mengatur header agar output berupa JSON
header('Content-Type: application/json');

// Variabel respons
$response = array('success' => false, 'message' => '');

// Pastikan metode POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['message'] = "Metode request tidak valid.";
    echo json_encode($response);
    if ($conn) $conn->close();
    exit();
}

// 1. Ambil data dari form login
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// 2. Validasi input dasar
if (empty($email) || empty($password)) {
    $response['message'] = "Email dan password wajib diisi!";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = "Format email tidak valid!";
} else {
    // 3. Cari pengguna berdasarkan email
    $stmt = null; // Inisialisasi statement
    try {
        $stmt = $conn->prepare("SELECT id, name, password_hash FROM users WHERE email = ?");
        if ($stmt === false) throw new Exception("Prepare statement gagal: " . $conn->error);

        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result(); // Ambil hasil

        if ($result->num_rows === 1) {
            // Email ditemukan
            $user = $result->fetch_assoc();

            // 4. Verifikasi password menggunakan password_verify()
            if (password_verify($password, $user['password_hash'])) {
                // Password cocok! Login berhasil
                $response['success'] = true;
                $response['message'] = "Login berhasil! Selamat datang, " . htmlspecialchars($user['name']) . ".";

                // 5. Simpan informasi pengguna ke Session
                // Regenerate session ID untuk keamanan setelah login berhasil
                session_regenerate_id(true);
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['user_name'] = $user['name'];
                $_SESSION['user_email'] = $email;
                $_SESSION['loggedin'] = true; // Tandai sudah login

            } else {
                // Password salah
                $response['message'] = "Password yang Anda masukkan salah.";
            }
        } else {
            // Email tidak ditemukan
            $response['message'] = "Email tidak terdaftar.";
        }
        $stmt->close(); // Tutup statement setelah selesai

    } catch (Exception $e) {
        $response['message'] = "Terjadi kesalahan server saat login.";
        error_log("Login Error: " . $e->getMessage());
        if (isset($stmt) && $stmt instanceof mysqli_stmt) $stmt->close(); // Tutup jika error terjadi di tengah jalan
    }
}

// Tutup koneksi database
if ($conn && $conn->ping()) {
    $conn->close();
}

// 6. Kirim respons JSON ke JavaScript
echo json_encode($response);
?>