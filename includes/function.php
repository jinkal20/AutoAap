<?php
include 'connect.php';

function get_all_data($pdo) {
    $query = "SELECT * FROM tbl_car";

    $get_video = $pdo->query($query);
    $results = array();

    while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;

        // you could run subresult queries here - just write another function and append.
    }

    return $results;
}
?>