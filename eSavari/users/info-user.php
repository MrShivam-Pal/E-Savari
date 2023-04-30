<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'partials/_dbconnect.php';

$id = $_GET['id'];

$sql = "SELECT * FROM `users` WHERE `id` = $id";
$result = mysqli_query($conn, $sql);
$num = mysqli_num_rows($result);

if($num == 1){
    while($row = mysqli_fetch_assoc($result)){
        echo json_encode($row);
    }
}

?>