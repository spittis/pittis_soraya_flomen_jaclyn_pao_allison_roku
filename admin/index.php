<?php 

    require_once('../admin/scripts/config.php');

    if (isset($_GET['media'])) {
        $type = $_GET['media'];

        if ($type == "video") {
            $tbl = "tbl_movies";
            $col = 'movie_id';
            $tbl3 = 'tbl_movies_era';
        } else if ($type == "audio"){
            $tbl = "tbl_audio";
            $col = 'audio_id';
            $tbl3 = 'tbl_audio_era';
        }else{
            $tbl = "tbl_tv";
            $col = 'tv_id';
            $tbl3 = 'tbl_tv_era';
        }
    }

    if(isset($_GET['filter'])){

        //$tbl = 'tbl_movies';
        $tbl2 = 'tbl_era';
        $col2 = 'era_id';
        $col3 = 'era_name';
        $filter = $_GET['filter'];

        $results = filterResults($tbl, $tbl2, $tbl3, $col, $col2, $col3, $filter);
        
        echo json_encode($results);

    } else {

        $results = getAll($tbl);

        echo json_encode($results);
    }
?>