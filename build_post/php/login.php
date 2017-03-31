<?php
require("db_connector.php");
// Our database object
$db = new DB_connector();    

// Quote and escape form submitted values
$emailFromPost = $db -> quote($_POST['email']);
$passwordFromPost = $_POST['password'];

// Now insert it (with login or whatever) into your database, use mysqli or pdo!
// Select from database

$result = $db -> select("SELECT * FROM users WHERE email=".$emailFromPost);
if($result){
    $row=$result[0];
    
    if(password_verify($passwordFromPost,$row['password'])){
     echo json_encode($row);
    }
    else{
    echo json_encode("PASSWORD_INCORRECT");
    }
}
else{
  echo json_encode("NO_EMAIL_EXISTS");
}
?>

