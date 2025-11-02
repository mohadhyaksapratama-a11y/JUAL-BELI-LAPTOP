<?php
// Informasi untuk koneksi ke database MySQL di XAMPP
$db_host = "localhost"; // Biasanya 'localhost' untuk XAMPP
$db_user = "root";      // Username default MySQL di XAMPP
$db_pass = "";          // Password default MySQL di XAMPP (kosong)
$db_name = "xyz_company_db"; // Nama database yang tadi kita buat

// Membuat koneksi ke database
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Enable error reporting for mysqli
try {
    $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
    // Mengatur set karakter
    $conn->set_charset("utf8mb4");
} catch (mysqli_sql_exception $e) {
    // Jika koneksi gagal, kirim response JSON error generik dan hentikan
    header('Content-Type: application/json');
    // Jangan tampilkan detail error ke user di production
    error_log("Database Connection Error: " . $e->getMessage()); // Log error for developer
    echo json_encode(['success' => false, 'message' => 'Koneksi Database Gagal.']);
    exit(); // Hentikan eksekusi
}
// Koneksi berhasil jika tidak ada error
?>