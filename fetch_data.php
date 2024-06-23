<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

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

// SQL query to fetch data sorted by submission_datetime
$sql = "SELECT full_name, mobile_number, vehicle_number, vehicle_type, origin_state, origin_lga, destination_state, destination_lga, contact, terminal_id, submission_datetime FROM haulage_fee ORDER BY submission_datetime DESC";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($data);
?>
