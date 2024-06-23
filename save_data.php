<?php
header("Expires: Tue, 01 Jan 2000 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

error_reporting(E_ALL);
ini_set('display_errors', 1);


date_default_timezone_set('Africa/Lagos');


$servername = "sql308.infinityfree.com";
$username = "if0_35468458";
$password = "sYorgpbM8w";
$dbname = "if0_35468458_haulage_fee";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect POST data
$full_name = $_POST['full_name'] ?? '';
$mobile_number = $_POST['mobile_number'] ?? '';
$vehicle_number = $_POST['vehicle_number'] ?? '';
$vehicle_type = $_POST['vehicle_type'] ?? '';
$origin_state = $_POST['origin_state'] ?? '';
$origin_lga = $_POST['origin_lga'] ?? '';
$destination_state = $_POST['destination_state'] ?? '';
$destination_lga = $_POST['destination_lga'] ?? '';
$contact = $_POST['contact'] ?? '';
$terminal_id = $_POST['terminal_id'] ?? '';
$submission_datetime = date('Y-m-d H:i:s');  // Use current date and time


// Check for duplicates
$check_sql = "SELECT * FROM haulage_fee WHERE full_name = ? AND mobile_number = ? AND vehicle_number = ? AND vehicle_type = ? AND origin_state = ? AND origin_lga = ? AND destination_state = ? AND destination_lga = ? AND contact = ? AND terminal_id = ?";
$check_stmt = $conn->prepare($check_sql);
$check_stmt->bind_param("ssssssssss", $full_name, $mobile_number, $vehicle_number, $vehicle_type, $origin_state, $origin_lga, $destination_state, $destination_lga, $contact, $terminal_id);
$check_stmt->execute();
$check_result = $check_stmt->get_result();



if ($check_result->num_rows > 0) {
    
} else {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO haulage_fee (full_name, mobile_number, vehicle_number, vehicle_type, origin_state, origin_lga, destination_state, destination_lga, contact, terminal_id, submission_datetime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssssss", $full_name, $mobile_number, $vehicle_number, $vehicle_type, $origin_state, $origin_lga, $destination_state, $destination_lga, $contact, $terminal_id, $submission_datetime);

    if ($stmt->execute()) {
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}
/*

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO haulage_fee (full_name, mobile_number, vehicle_number, vehicle_type, origin_state, origin_lga, destination_state, destination_lga, contact, terminal_id, status, submission_datetime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
}

$stmt->bind_param("ssssssssssss", $full_name, $mobile_number, $vehicle_number, $vehicle_type, $origin_state, $origin_lga, $destination_state, $destination_lga, $contact, $terminal_id, $status, $submission_datetime);

// Execute the statement
if ($stmt->execute()) {
    
} else {
    echo "Error: " . $stmt->error;
}
*/
// Close statement and connection
$stmt->close();
$conn->close();
?>
