<?php
require("db_connector.php");
// Our database object
$db = new DB_connector();    

// Quote and escape form submitted values
$idFromPost = $db -> quote($_POST['id']);
$result = $db -> select("SELECT id,username,account_permissions,src FROM users WHERE users.id IN(SELECT DISTINCT id_creator FROM comments WHERE id_owner=$idFromPost)");
echo json_encode($result);
?>