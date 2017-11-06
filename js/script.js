
var elOutput = document.getElementById('output');
var elName = document.getElementById('userName');
//var elChooseAlbum = document.getElementById('package');
var elForm = document.getElementById('formAlbum');



function myValidation() {
    var x, text;

    x = document.getElementById("userName").value;

    if ( x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("outputForValidation").innerHTML = text;
    var package = document.getElementById("package").value;
    document.getElementById("packageOutput").innerHTML = package;
}


function showVoteFor() {
    var y, album;

    y = document.getElementById('package').value;
    document.getElementById('outoutForVote').innerHTML = album;

}

    function showName(event) {
        // Använd value när man hämtar från input i formuläret
        var name = elName.value;


        elOutput.textContent = 'Tack ' + name + ' för din röst på ';

        // Submittar inte formuläret
        event.preventDefault(); //
    }


//elChooseAlbum.addEventListener('submit', showVoteFor, false);
elForm.addEventListener('submit', showName, false);

$(document).ready(function(){


    $(".json-btn").click(function() {

        $.getJSON("json/config.json")
            .done(function(response) {
                console.log(response);
                $(".album-output").text(response.album.somera_sol);
                //$(".album-output").css("color", "white");
                $(".album-output").addClass("test");
                $(".album-output").fadeIn(1000);
            });

    });

});



