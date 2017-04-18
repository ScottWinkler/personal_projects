<?php
require("db_connector.php");
// Our database object
$db = new DB_connector();    

// Quote and escape form submitted values
$idFromPost = $db -> quote($_POST['id']);
$result = $db -> select("SELECT * FROM likes WHERE id_owner=".$idFromPost);
echo json_encode($result);
?>