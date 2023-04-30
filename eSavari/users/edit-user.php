<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'partials/_dbconnect.php';

$user = json_decode(file_get_contents('php://input'));

$id = $user->id;
$name = $user->name;
$phoneNumber = $user->phoneNumber;
$password = $user->password;
$confirmPassword = $user->confirmPassword;

$sql = "UPDATE users SET name = `$name`, phoneNumber = `$phoneNumber`, password = `$password` WHERE id = `$id`;";
$result = mysqli_query($conn, $sql);

if($result){
    $response = ['status' => '1', 'message' => 'Update Successfully'];
}
else{
    $response = ['status' => '0', 'message' => 'Somethin Went Wrong!'];
} 

echo json_encode($response);

?>