<?php
require("db_connector.php");
// Our database object
$db = new DB_connector();    

// Quote and escape form submitted values
$emailFromPost = $db -> quote($_POST['email']);
$usernameFromPost= $db -> quote($_POST['username']);
$passwordFromPost = $_POST['password'];

// Now insert it (with login or whatever) into your database, use mysqli or pdo!
// Select from database

$result = $db -> select("SELECT * FROM users WHERE username=".$usernameFromPost);
$row=$result[0];
    
if(password_verify($passwordFromPost,$row['password'])){
    $result = $db -> query("UPDATE  `Tunacake`.`users` SET  `email` =  $emailFromPost WHERE  `users`.`username` = $usernameFromPost");
    $row=$result[0];
    echo json_encode($row);
}
else{
echo json_encode("PASSWORD_INCORRECT");
}

?>