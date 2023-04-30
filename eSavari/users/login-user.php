<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'partials/_dbconnect.php';

$user = json_decode(file_get_contents('php://input'));

$email = $user->email;
$password = $user->password;

$sql = "SELECT * FROM `users` WHERE `email` = '$email'";
$result = mysqli_query($conn, $sql);
$num = mysqli_num_rows($result);

if($num == 1){
    while($row = mysqli_fetch_assoc($result)){
        if(password_verify($password, $row['password'])){
            $response = ['status' => '1', 'message' => 'Login Successfully', 'id' => $row['id']];
        }
        else{
            $response = ['status' => '0', 'message' => 'Password is Wrong!'];
        }
    }
}
else{
    $response = ['status' => '0', 'message' => 'User is not Exist. Please Signup!'];
}

echo json_encode($response);

?>