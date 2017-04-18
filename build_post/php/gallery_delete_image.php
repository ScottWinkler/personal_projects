<?php
require("db_connector.php");
$db = new DB_connector();    
$idFromPost = $db -> quote($_POST['id_image']);
$result = $db -> query("DELETE FROM `Tunacake`.`gallery` WHERE `gallery`.`id`=$idFromPost");
?>