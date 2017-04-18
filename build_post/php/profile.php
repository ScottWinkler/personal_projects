<?php
require("db_connector.php");
$db = new DB_connector();
$usernameFromPost= $db -> quote($_POST['username']);
$passwordFromPost = $_POST['password'];    

//is it an email update?
if($_POST['email']){
    $emailFromPost = $db -> quote($_POST['email']);
    $email_exists=$db ->select("SELECT * FROM users WHERE email=$emailFromPost");

    if(!$email_exists){
        $result = $db -> select("SELECT * FROM users WHERE username =".$usernameFromPost);
        $row=$result[0];   
        if(password_verify($passwordFromPost,$row['password'])){
            $result = $db -> query("UPDATE  `Tunacake`.`users` SET  `email` =  $emailFromPost WHERE  `users`.`username` = $usernameFromPost");
            $result = $db -> select("SELECT * FROM users WHERE username =".$usernameFromPost);
            $row=$result[0];
            echo json_encode($row);
        }
        else{
        echo json_encode("PASSWORD_INCORRECT");
        }
    }
    else{
        echo json_encode("EMAIL_EXISTS");
    }
}
//is it an avatar picture update?
elseif($_POST['src']){
    $srcFromPost= $db -> quote($_POST['src']); 
    $result = $db -> query("UPDATE  `Tunacake`.`users` SET  `src` =  $srcFromPost WHERE  `users`.`username` = $usernameFromPost");
    $result = $db -> select("SELECT * FROM users WHERE username =".$usernameFromPost);
    $row=$result[0];
    echo json_encode($row);
}

//else it is a password update
else{
    $newPasswordFromPost=$_POST['newPassword'];
    $options = [
    'cost' => 11,
    ];
    $hash = password_hash($newPasswordFromPost, PASSWORD_BCRYPT, $options);
    $quoted_hash = $db -> quote($hash);
    $result = $db -> select("SELECT * FROM users WHERE username =".$usernameFromPost);
    $row=$result[0];   
    if(password_verify($passwordFromPost,$row['password'])){
        $result = $db -> query("UPDATE  `Tunacake`.`users` SET  `password` =  $quoted_hash WHERE  `users`.`username` = $usernameFromPost");
        $result = $db -> select("SELECT * FROM users WHERE username =".$usernameFromPost);
        $row=$result[0];
        echo json_encode($row);
    }
    else{
        echo json_encode("PASSWORD_INCORRECT");
    }
}

?>