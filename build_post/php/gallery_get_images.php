<?php
require("db_connector.php");
$db = new DB_connector();    
$idFromPost = $db -> quote($_POST['id_user']);
$result = $db -> select("SELECT * FROM gallery WHERE id_user=$idFromPost ORDER BY datetime_created");
echo json_encode($result);
?>