<?php
// Assuming your MySQL database is running locally through XAMPP
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "contact_form_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$firstName = $request->firstName;
$lastName = $request->lastName;
$email = $request->email;
$phoneNumber = $request->phoneNumber;
$message = $request->message;

// Store data in MySQL database
$sql = "INSERT INTO contact_form_data (first_name, last_name, email, phone_number, message)
VALUES ('$firstName', '$lastName', '$email', '$phoneNumber', '$message')";

if ($conn->query($sql) === TRUE) {
    $response = ["success" => true];
    echo json_encode($response);
} else {
    $response = ["success" => false, "error" => $conn->error];
    echo json_encode($response);
}

$conn->close();
?>
