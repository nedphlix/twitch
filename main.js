var chans = [
    "brunofin",     //0
    "comster404",   //1
    "ESL_SC2",      //2
    "OgamingSC2",   //3
    "cretetion",    //4
    "freecodecamp", //5
    "storbeck",     //6
    "habathcx",     //7
    "RobotCaleb",   //8
    "noobs2ninjas"  //9
];

function callAjax(link, name) {
    $.ajax({
        dataType: 'json',
        url: link,
        async: false,
        type: "GET",
        success: function(data) {
            var nameLink = "https://www.twitch.tv/" + name;
            var str = "";

            if (data.stream) {
                str += '<div class="wrapper online col-xs-6 col-xs-offset-3"><div class=""> <a target="_blank href="' + nameLink + '">' + name + '</a></div> <div class="content">';
                str += data.stream.game + ': ' + data.stream.channel.status;
            } else {
                if (data.error) {
                    str += '<div class="wrapper default col-xs-6 col-xs-offset-3"><div class=""> <a target="_blank href="' + nameLink + '">' + name + '</a></div> <div class="content">';
                    str += " never created";
                } else {
                    str += '<div class="wrapper no-account col-xs-6 col-xs-offset-3"><div class=""> <a target="_blank href="' + nameLink + '">' + name + '</a></div> <div class="content">';
                    str += " stream off";
                }
            }
            str += "</div>";
            $("#output").append(str);
        }
    });
}

$(document).ready(function() {
    var k = 0;
    for (var i = 0; i < chans.length; i++) {
        var link = "https://api.twitch.tv/kraken/streams/" + chans[i] + "?callback=?";
        callAjax(link, chans[i]);
    }
});