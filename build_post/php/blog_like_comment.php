<?php
require("db_connector.php");
$db = new DB_connector();
$idLikerFromPost= $db -> quote($_POST['id_liker']);
$idCommentFromPost= $db -> quote($_POST['id_comment']);
$idOwnerFromPost= $db -> quote($_POST['id_owner']);
$db -> query("INSERT INTO `Tunacake`.`likes` (`id`, `id_liker`, `id_comment`, `id_owner`) VALUES (NULL, $idLikerFromPost, $idCommentFromPost, $idOwnerFromPost)");

?>