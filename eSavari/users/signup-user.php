<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'partials/_dbconnect.php';

$user = json_decode(file_get_contents('php://input'));

$name = $user->name;
$email = $user->email;
$phoneNumber = $user->phoneNumber;
$password = $user->password;
$confirmPassword = $user->confirmPassword;

$existsql = "SELECT * FROM `users` WHERE `email` = '$email'";
$existres = mysqli_query($conn, $existsql);
$num = mysqli_num_rows($existres);

if($num > 0){
    $response = ['status' => '0', 'message' => 'User Already Exist'];
}
else{
    if($password == $confirmPassword){
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO `users` (`id`, `name`, `email`, `phoneNumber`, `password`, `createdDate`) VALUES (NULL, '$name', '$email', '$phoneNumber', '$hash', current_timestamp());";
        $result = mysqli_query($conn, $sql);

        if($result){
            $response = ['status' => '1', 'message' => 'Now, You can Login!'];
        }
        else{
            $response = ['status' => '0', 'message' => 'Something Went Wrong!'];
        }
    }
    else{
        $response = ['status' => '0', 'message' => 'Password Not Mached'];
    }
}

echo json_encode($response);

?>