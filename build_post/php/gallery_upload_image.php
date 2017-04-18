<?php
require("db_connector.php");
$db = new DB_connector();
$srcFromPost= $db -> quote($_POST['src']); 
$descriptionFromPost= $db -> quote($_POST['description']);
$titleFromPost=$db->quote($_POST['title']);
$idUserFromPost= $db -> quote($_POST['id_user']);
$db -> query("INSERT INTO `Tunacake`.`gallery` (`id`, `src`, `description`, `title`, `datetime_created`, `datetime_modified`, `id_user`) VALUES (NULL,$srcFromPost, $descriptionFromPost, $titleFromPost,CURRENT_TIMESTAMP, NULL, $idUserFromPost);");
?>