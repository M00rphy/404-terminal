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

    switch (val) {
        case 'let_me_in':
            answer = "No";
            resetForm();
            break;

        case 'hello_there':
            answer = "General Kenobi";
            resetForm();
            break;

        case 'anon_ops':
            showAnon();
            answer = "Greetings World";
            break;

        case 'lol':
            answer = 'Do you think this is funny m8??';
            resetForm();
            break;

        case 'allow_access':
            answer = 'Nope';
            resetForm();
            break;

        case 'why':
            answer = "Because I don't want to";
            resetForm();
            break;

        case 'access_granted':
            answer = "Access Denied";
            resetForm();
            break;

        case 'override_mainframe':
            answer = "Are you being serious?";
            resetForm();
            break;

        case 'play_game':
            answer = "not unless you know how";
            resetForm();
            break;

        case 'join_now':
            answer = "This is your last chance. After this, there is no turning back. You take the blue pill, the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember: all I'm offering is the truth. Nothing more. ";
            quest = true;
            resetForm();
            break;

        case 'red':
            red = 'red';
            redPillHandler();
            break;

        case 'blue':
            blue = 'blue';
            bluePillHandler();
            break;


        case 'clear':
            $('.prompt_output').remove();
            resetForm();
            quest = false;
            $('.prompt').empty();
            $('.prompt').remove();
            $('.imgPrint').remove();
            break;

        case 'cls':
            $('.prompt_output').remove();
            resetForm();
            quest = false;
            $('.prompt').empty();
            $('.prompt').remove();
            $('.imgPrint').remove();
            break;


        case '/help':
            answer = "Available commands:\n\
             delete\n\
             clear || cls";
            resetForm();
            break;

        case 'help':
            answer = "Available commands:\n\
             delete\n\
             clear || cls";
            resetForm();
            break;

        case '/help_ext':
            answer = "Available extended commands: \n\
            join_now \n\
            allow_access \n\
            access_granted \n\
            anon_ops \n\
            override_mainframe \n\
            play_game";
            resetForm();
            break;

        case 'help_ext':
            answer = "Available extended commands: \n\
            join_now \n\
            allow_access \n\
            access_granted \n\
            anon_ops \n\
            override_mainframe \n\
            play_game";
            resetForm();
            break;

        case 'exit':
            answer = "Do you really thought this was a real terminal? LOL";
            resetForm();
            break;

        //mobile enhanced commands

        case 'Anon_ops':
            showAnon();
            answer = "Greetings World";
            break;

        case 'Lol':
            answer = 'Do you think this is funny m8??';
            resetForm();
            break;

        case 'Allow_access':
            answer = 'Nope';
            resetForm();
            break;

        case 'Why':
            answer = "Because I don't want to";
            resetForm();
            break;

        case 'Access_granted':
            answer = "Access Denied";
            resetForm();
            break;

        case 'Override_mainframe':
            answer = "Are you being serious?";
            resetForm();
            break;

        case 'Play_game':
            answer = "not unless you know how";
            resetForm();
            break;

        case 'Join_now':
            answer = "This is your last chance. After this, there is no turning back. You take the right path—the story ends, you wake up in your bed and believe whatever you want to believe. You take the left path—you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember: all I'm offering is the truth. Nothing more. ";
            quest = true;
            resetForm();
            break;

        case 'Red':
            red = 'red';
            redPillHandler();
            break;

        case 'Blue':
            blue = 'blue';
            bluePillHandler();
            break;


        case 'Clear':
            $('.prompt_output').remove();
            resetForm();
            quest = false;
            $('.prompt').empty();
            $('.prompt').remove();
            $('.imgPrint').remove();
            break;

        case 'Cls':
            $('.prompt_output').remove();
            resetForm();
            quest = false;
            $('.prompt').empty();
            $('.prompt').remove();
            $('.imgPrint').remove();
            break;


        case '/Help':
            answer = "Available commands:\n\
             delete\n\
             clear || cls";
            resetForm();
            break;

        case 'Help':
            answer = "Available commands:\n\
             delete\n\
             clear || cls";
            resetForm();
            break;

        case '/Help-ext':
            answer = "Available extended commands: \n\
            join_now \n\
            allow_access \n\
            access_granted \n\
            anon_ops \n\
            override_mainframe \n\
            play_game";
            resetForm();
            break;

        case 'Help-ext':
            answer = "Available extended commands: \n\
            join_now \n\
            allow_access \n\
            access_granted \n\
            anon_ops \n\
            override_mainframe \n\
            play_game";
            resetForm();
            break;

        case 'Exit':
            answer = "Do you really thought this was a real terminal? LOL";
            resetForm();
            break;

        case '':
            answer = "That's an empty string dude";
            resetForm();
            break;

        default:
            answer = "'" + val + "'" + " " + "it's not acceptable!";
            resetForm();
            break;
    }

    function redPillHandler() {
        if (red === 'red' && quest === true) {
            answer = "So be it 🜏 ⛧!";
            pentagram();
            resetForm();
            $('.prompt_output').remove();
            $('.prompt').remove();
        } else if (left === 'left' && !quest) {
            answer = "Are you runing away from me? 	&#x1F494;";
            resetForm();
        }
    }

    function bluePillHandler() {
        if (blue === 'blue' && quest === true) {
            magicWord();
            showMiddleFinger();
            $('.prompt').remove();
            answer = "ok ┌∩┐(◣_◢)┌∩┐";
            resetForm();
            $('.new-input').remove();
        } else if (right === 'right' && !quest) {
            answer = "What are you doing?";
            resetForm();
        }
    }
});

function resetForm() {
    var input = $('.404-input');


    $('.new-input').removeClass('new-input');
    input.val('');
    $('.terminal').append('<p class="prompt">' + answer + '</p><p class="prompt_output new-input"></p>');

    $('.new-input').velocity(
        'scroll',
    ), {
        duration: 100,
    }
}

function pentagram() {
    $('.terminal').append("<div class='imgPrint'>" +
        "<p class='lr_out'>___________________ssssssss__________________ </p>" +
        "<p class='lr_out'>____________sssss____________sssss____________ </p>" +
        "<p class='lr_out'>_________ssss____________________ssss________ </p>" +
        "<p class='lr_out'>_______sss__s____________________s__sss______ </p>" +
        "<p class='lr_out'>_____sss_____ss________________ss_____sss_____ </p>" +
        "<p class='lr_out'>____ss_______sssss__________sssss_______ss_____ </p>" +
        "<p class='lr_out'>___ss_________s___ss______ss___s________ss___ </p>" +
        "<p class='lr_out'>__ss__________ss____ssssss____ss__________ss__ </p>" +
        "<p class='lr_out'>_sss___________ss___s____s___ss___________sss_ </p>" +
        "<p class='lr_out'>_sss___________ss__s______s__ss___________sss_ </p>" +
        "<p class='lr_out'>_ss____________ssss________ssss____________ss_ </p>" +
        "<p class='lr_out'>_ss________sss__________________sss________ss_  </p>" +
        "<p class='lr_out'>_ss_____sss______ss________ss______sss______ss_ </p>" +
        "<p class='lr_out'>_sss__sssssssssssssssssssssssssssssssssss__sss_ </p>" +
        "<p class='lr_out'>__ss_______________s____ss______________sss__ </p>" +
        "<p class='lr_out'>___ss______________ss___ss_____________sss___ </p>" +
        "<p class='lr_out'>____ss______________s__ss_____________sss____ </p>" +
        "<p class='lr_out'>_______sss___________sss___________sss_______ </p>" +
        "<p class='lr_out'>_________ssss_________s_________sss__________ </p>" +
        "<p class='lr_out'>____________sssss_____s____sssss_____________ </p>" +
        "<p class='lr_out'>__________________ssssssss________________</p>" +


        "<p class='lr_out'>                                                              </p></div>");
    var lines = $('.imgPrint p');
    $.each(lines, function (index, line) {
        setTimeout(function () {
            $(line).css({
                "opacity": 1
            });

            textEffect($(line))
        }, index * 100);
    });
    $('.terminal').append('<p class="lr_out">' + answer + '</p><p class="prompt_output new-input"></p>');
    $('.new-input').velocity(
        'scroll'
    ), {
        duration: 100
    };
    setTimeout(function () {
        window.location.replace('errorLogs/main.php');
    }, 3500);
}

function showMiddleFinger() {
    $('.terminal').append("<div class='imgPrint'>" +
        "<p class='lr_out'>░░░░░░░░░░░░░▄▄▄▄▄▄▄░░░░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░░░▄▀▀▀░░░░░░░▀▄░░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░▄▀░░░░░░░░░░░░▀▄░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░▄▀░░░░░░░░░░▄▀▀▄▀▄░░░░░</p>" +
        "<p class='lr_out'>░░░░▄▀░░░░░░░░░░▄▀░░██▄▀▄░░░░</p>" +
        "<p class='lr_out'>░░░▄▀░░▄▀▀▀▄░░░░█░░░▀▀░█▀▄░░░</p>" +
        "<p class='lr_out'>░░░█░░█▄░░░░█░░░▀▄░░░░░▐░█░░░</p>" +
        "<p class='lr_out'>░░▐▌░░█▀░░░▄▀░░░░░▀▄▄▄▄▀░░█░░</p>" +
        "<p class='lr_out'>░░▐▌░░█░░░▄▀░░░░░░░░░░░░░░█░░</p>" +
        "<p class='lr_out'>░░▐▌░░░▀▀▀░░░░░░░░░░░░░░░░▐▌░</p>" +
        "<p class='lr_out'>░░▐▌░░░░░░░░░░░░░░░▄░░░░░░▐▌░</p>" +
        "<p class='lr_out'>░░▐▌░░░░░░░░░▄░░░░░█░░░░░░▐▌░</p>" +
        "<p class='lr_out'>░░░█░░░░░░░░░▀█▄░░▄█░░░░░░▐▌░</p>" +
        "<p class='lr_out'>░░░▐▌░░░░░░░░░░▀▀▀▀░░░░░░░▐▌░</p>" +
        "<p class='lr_out'>░░░░█░░░░░░░░░░░░░░░░░░░░░█░░</p>" +
        "<p class='lr_out'>░░░░▐▌▀▄░░░░░░░░░░░░░░░░░▐▌░░</p>" +
        "<p class='lr_out'>░░░░░█░░▀░░░░░░░░░░░░░░░░▀░░░</p>" +
        "<p class='lr_out'>╦═╗╔═╗╔══║░║╔═╗░░╦═╗╦░╦═╗░░╦░</p>" +
        "<p class='lr_out'>║░║╠═╣╠═░║░║║░║░░║░║║░║░║░░║░</p>" +
        "<p class='lr_out'>╩═╝║░║║░░╚═╝╩╩╝░░╩═╝╩░╩═╝░░╩░</p>" +
        "<p class='lr_out'>═╦║░║╔═╗═╦═░░╔═╗╔═╗╔═╗╦═╗░╔═╗</p>" +
        "<p class='lr_out'>░║║░║╚═╗░║░░░╠╦╝╠╣░╠═╣║░║░░╔╝</p>" +
        "<p class='lr_out'>╚╝╚═╝╚═╝░║░░░║╚═╚═╝║░║╩═╝░░▄░</p>" +
        "<p class='lr_out'>                                                              </p></div>");
    var lines = $('.imgPrint p');
    $.each(lines, function (index, line) {
        setTimeout(function () {
            $(line).css({
                "opacity": 1
            });

            textEffect($(line))
        }, index * 100);
    });

    $('.new-input').velocity(
        'scroll'
    ), {
        duration: 100
    };
    setTimeout(function () {
        window.location.replace('https://www.youtube.com/watch?v=eT3BFzSD6YY');
    }, (lines.length * 100) + 3000);
}

function showAnon() {
    $('.terminal').append("<div class='imgPrint'>" +
        "<p class='lr_out'>░░░░░░░░░░░░░░░▓▓███████▓▒░░░░░░░░░░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░░░░░▓██████▓▓▓▓▓██████▓░░░░░░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░░░████▒░░░░░░░░░░░░░▓████░░░░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░███▓░░░░░░░░░░░░░░░░░░░▓██▒░░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░██▓░░░░░░░░░░░░░░░░░░░░░░░██▓░░░░░░</p>" +
        "<p class='lr_out'>░░░░▒██░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░░░░</p>" +
        "<p class='lr_out'>░░░░██░░░▒▒▒░░░░░░░░░░░░░░░▒▓███▓░░█▓░░░░</p>" +
        "<p class='lr_out'>░░░██░░▓▓▓▓▓▓▓▒░░░░░░░░░░▒▓███████▓░█▒░░░</p>" +
        "<p class='lr_out'>░░██░▒███████▓▒▒░░░░░░░░▒██████████▓▓█░░░</p>" +
        "<p class='lr_out'>░░█░▒██████████▓░░░░░░░▒██████▓▒▒▓██░██░░</p>" +
        "<p class='lr_out'>░██░██░░░░░▓▓▓███▒░░░░░█████░░░░░░░██░█░░</p>" +
        "<p class='lr_out'>░█░██░░░░░░░░▓▓██▓░░░░░░██▒░░░░░░░░░▓░██░</p>" +
        "<p class='lr_out'>▒█░▓░░░░░░░░░░▓██░░░░░░█▓░░░░░░░░░░░░░▓█░</p>" +
        "<p class='lr_out'>▓█░░░░░░░░░░░░░░██░░░░█▓░░░░░▒▒▒░░░░▒░░█░</p>" +
        "<p class='lr_out'>█▓░░░░░░░▓███▓▓░░▒█░░░█░░░▒██▓▓▓█░░░░▓░█░</p>" +
        "<p class='lr_out'>█▒▒░░░░░█▓░▒▒▒▓█▓░▒▒░░▓░░█▓▓▓██▓▓█░░░▓░█▒</p>" +
        "<p class='lr_out'>█░▒▒░░░█▓▓████▓░█▒░▒░░▓░█▓███████▓▓░░█░█▓</p>" +
        "<p class='lr_out'>█░░▓░░▒█████████▓█░▒░░▒░█▓███████▒███░░█▓</p>" +
        "<p class='lr_out'>█░░█▒▓█▓█████▓▓▓█░░▒░░▒░░█▓▒▒▒░░░▒███░░▓█</p>" +
        "<p class='lr_out'>█░░▒███▓▓▓▓▓▓▓▒░░░░▒░░▒░░░░▓▓▓▓▓▓▒░▒██░░█</p>" +
        "<p class='lr_out'>█▒░▓▓░░░░░░░░░░░░░░▒░░▒▒░░░░░░░░░░░░░█▓░█</p>" +
        "<p class='lr_out'>█▓░▒░░░░░░░░░░░░░░░▒░░░▒░░░░░░░░░░░░░░▓░█</p>" +
        "<p class='lr_out'>█▓░░░░░░░░░░░░░░░░░▒░░░▒░░░░░░░░░░░░░░▒░█</p>" +
        "<p class='lr_out'>▓█░░░░░░░░░░░░░░▒░░░░░░░░░█░░░░░░░░░░░░░█</p>" +
        "<p class='lr_out'>▓█░░░░░░░░░░░░░█░░░░░░░░░░▒█░░░░░░░░░░░░█</p>" +
        "<p class='lr_out'>▓█░░░░░░░░░░░░█▓░░░░░░░░░░░██░░░░░░░░░▓░█</p>" +
        "<p class='lr_out'>▓█░░░░░░░░░░▓██▒░▓░░░░░░░█░▓▓██░░░░░░░█░█</p>" +
        "<p class='lr_out'>▒█░▒░░░░░░▓██░░█░██▓░░░░███▓░░██▓░░░░█▓░█</p>" +
        "<p class='lr_out'>░█░░█░░░▓██▓░░░▒▓▒███▓▓██░▒░░░░░██▓▓█▓░░█</p>" +
        "<p class='lr_out'>░█░░░█████░░░░░░░░███████░░░░░░░░████░▓░█</p>" +
        "<p class='lr_out'>░█▒░░░▓███▒░░░░░░████▒▓███▒░░░░░▓███░░▓░█</p>" +
        "<p class='lr_out'>░█▓░░░▓▒███▒░▒▓█████▒░░█████████████░▒▓██</p>" +
        "<p class='lr_out'>░██░░░░▓░██████████▒░░░░█████████▒█░░▓█▓█</p>" +
        "<p class='lr_out'>░▓█░░░░░▓░██████████████████████▒▓█░░█░▒█</p>" +
        "<p class='lr_out'>░▒█░░░░░▓▓░░░░░░░░░░░░░░░░░░░░░░▒█░░██░█▓</p>" +
        "<p class='lr_out'>░░█░░░░░░██░░░░░░░░░░░░░░░░░░░░▓█▒░▒█░░█▓</p>" +
        "<p class='lr_out'>░░█▓░▒░░░░█████████▓▓▓▓▓██████▓▓█░░█▒░░█░</p>" +
        "<p class='lr_out'>░░▓█░▒▓░░░▒█░░▒▒▓▓▓██████▒░░░░░█░░█▓░░▒█░</p>" +
        "<p class='lr_out'>░░░█░░▓█░░░▓▓░░░░░░░▓███▒░░░░░▓▓░▒█░░░██░</p>" +
        "<p class='lr_out'>░░░██░░██░░░█▒░░░░░░░███░░░░░░█░░█░░░░█▒░</p>" +
        "<p class='lr_out'>░░░░█▓░░██░░░█▒░░░░░▓███▒░░░░█▒░█▒░░░██░░</p>" +
        "<p class='lr_out'>░░░░▒█▒░░██░░░█░░░░░████▓░░░▒▓░▓▓░░░▓█░░░</p>" +
        "<p class='lr_out'>░░░░░▓█▓░░▓▓░░░█░░░░█████░░░░░░▓░░░▓█▒░░░</p>" +
        "<p class='lr_out'>░░░░░░▓██░░▒░░░░▓░░░▓███▓░░░░░▓░░░▓█▓░░░░</p>" +
        "<p class='lr_out'>░░░░░░░░██▒░░░░░░░░░▒███▓░░░░▒░░░██▓░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░░░███░░░░░░░░░███▒░░░░░░░██▒░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░░░░▒██▓░░░░░░░███░░░░░░▓██░░░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░░░░░░▓██▓░░░░░▓██░░░░░██▓░░░░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░░░░░░░░███▒░░░░█▒░░▒███░░░░░░░░░░░</p>" +
        "<p class='lr_out'>░░░░░░░░░░░░░░░░████▓▓█▓████░░░░░░░░░░░░░</p>" +
        "<p class='lr_out'>                                                              </p></div>");


    var lines = $('.imgPrint p');
    $.each(lines, function (index, line) {
        setTimeout(function () {
            $(line).css({
                "opacity": 1
            });

            textEffect($(line))
        }, index * 100);
    });


    setTimeout(function () {

        resetForm(true);
    }, (lines.length * 100) + 1000);
}

function textEffect(line) {
    var alpha = [';', '.', ',', ':', ';', '~', '`', '-', '_', '+'];
    var animationSpeed = 10;
    var index = 0;
    var string = line.text();
    var splitString = string.split("");
    var copyString = splitString.slice(0);

    var emptyString = copyString.map(function (el) {
        return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
    });

    emptyString = shuffle(emptyString);

    $.each(copyString, function (i, el) {
        var newChar = emptyString[i];
        toUnderscore(copyString, line, newChar);

        setTimeout(function () {
            fromUnderscore(copyString, splitString, newChar, line);
        }, i * animationSpeed);
    })
}

function toUnderscore(copyString, line, newChar) {
    copyString[newChar[1]] = newChar[0];
    line.text(copyString.join(''));
}

function fromUnderscore(copyString, splitString, newChar, line) {
    copyString[newChar[1]] = splitString[newChar[1]];
    line.text(copyString.join(""));
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) ;
    return o;
}

//TODO: add a loop that counts how many times you have failed attempts to access the game and show you the jurassic park reference
