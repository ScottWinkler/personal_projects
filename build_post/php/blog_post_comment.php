<?php
require("db_connector.php");
$db = new DB_connector();
$messageFromPost= $db -> quote($_POST['message']); 
$idOwnerFromPost= $db -> quote($_POST['id_owner']);
$idCreatorFromPost= $db -> quote($_POST['id']);
$idParentFromPost= $db -> quote($_POST['id_parent']);

$db -> query("INSERT INTO `Tunacake`.`comments` (`id`, `message`, `datetime_created`, `datetime_modified`, `id_owner`, `id_creator`, `id_parent`) VALUES (NULL, $messageFromPost, CURRENT_TIMESTAMP, NULL, $idOwnerFromPost, $idCreatorFromPost, $idParentFromPost)");

?>