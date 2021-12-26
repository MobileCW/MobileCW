<?php
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "mobile_ux";

// Create connection
$conn = mysqli_connect($servername,$username,"",$dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>