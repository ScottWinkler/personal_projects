<?php

$to = $_POST['email'];
$subject = "Welcome to Kitty Fanclub!";
$message = "Hello,\r\n\r\nThank you for joining the kitty fanclub website. If you have any questions or inquires, please respond to this email.\r\nThanks again, and welcome!\r\n\r\n--Admin";
$headers = 'From: <admin@kittyfanclub.com>';
mail($to,$subject,$message,$headers);

?>