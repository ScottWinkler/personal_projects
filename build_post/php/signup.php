<?php
require("db_connector.php");
// Our database object
$db = new DB_connector();    

// Quote and escape form submitted values
$nameFromPost = $db -> quote($_POST['username']);
$passwordFromPost = $_POST['password'];
$emailFromPost = $db -> quote($_POST['email']);
$options = [
    'cost' => 11,
];
$hash = password_hash($passwordFromPost, PASSWORD_BCRYPT, $options);
$quoted_hash = $db -> quote($hash);

// Now insert it (with login or whatever) into your database, use mysqli or pdo!
// Select from database
$account_exists=$db ->select("SELECT * FROM users WHERE username=$nameFromPost");
$email_exists=$db ->select("SELECT * FROM users WHERE email=$emailFromPost");
if($account_exists){
    echo json_encode("ACCOUNT_EXISTS");
}
elseif($email_exists){
    echo json_encode("EMAIL_EXISTS");
}
else{
    $db -> query("INSERT INTO `Tunacake`.`users` (`id`, `username`, `password`, `sign_up_date`, `email`, `bio`, `account_permissions`) VALUES (NULL, $nameFromPost, $quoted_hash, CURRENT_TIMESTAMP, $emailFromPost, '', 'c')");
    $result = $db -> select("SELECT * FROM users WHERE email=".$emailFromPost);
    $row=$result[0];
    require("send_email.php");
    echo json_encode($row);
}
?>
