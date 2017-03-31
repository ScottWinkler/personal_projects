<?php

$to = $_POST['email'];
$subject = "Welcome to Kitty Fanclub!";
$message = "Hello fellow kitty lover and welcome to the kitty fanclub website! I look forward to seeing your cat pictures and blog posts!";
$headers = 'From: <admin@kittyfanclub.com>';
mail($to,$subject,$message,$headers);

?>