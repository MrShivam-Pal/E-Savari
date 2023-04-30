<?php

mysqli_report(MYSQLI_REPORT_OFF);

$servername = "localhost";
$username = "root";
$password = "";
$database = "esavari";

$conn = mysqli_connect($servername, $username, $password, $database);

if(!$conn){
    //Trigger a user error and let the custom error handle it
    $response = ['status' => '0', 'message' => 'Website is in maintenance mode.'];
    echo json_encode($response);
}

?>