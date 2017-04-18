<?php
require("db_connector.php");
$db = new DB_connector();
$descriptionFromPost= $db -> quote($_POST['description']);
$titleFromPost=$db->quote($_POST['title']);
$idFromPost= $db -> quote($_POST['id_image']);
$dt = $db->quote(date('Y-m-d H:i:s'));
$db -> query("UPDATE `Tunacake`.`gallery` SET `description`=$descriptionFromPost, `title`=$titleFromPost, `datetime_modified`=$dt WHERE `gallery`.`id`=$idFromPost;");
?>