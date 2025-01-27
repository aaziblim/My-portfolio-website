<?php
// Add these headers at the VERY TOP of contact.php
header("Access-Control-Allow-Origin: http://localhost:5173"); // Allow Vite frontend
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Rest of your PHP code (error reporting, database connection, etc.)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require 'connection.php';


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require 'connection.php';

if(isset($_POST["submit"])){
    $firstname = mysqli_real_escape_string($conn, $_POST["firstname"]);
    $lastname = mysqli_real_escape_string($conn, $_POST["lastname"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $phonenumber = mysqli_real_escape_string($conn, $_POST["phonenumber"]);
    $message = mysqli_real_escape_string($conn, $_POST["message"]);

    $query = "INSERT INTO message_received (firstname, lastname, email, phonenumber, message) 
              VALUES (?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "sssss", $firstname, $lastname, $email, $phonenumber, $message);

    if(mysqli_stmt_execute($stmt)){
        echo "<script>alert('Data Inserted Successfully');</script>";
    } else {
        echo "<script>alert('Error: " . mysqli_error($conn) . "');</script>";
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($conn);
?>