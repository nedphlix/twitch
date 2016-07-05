var url;
var data;
// var res = [];

var logo;
var channelName;
var status;

var channels = [
  "brunofin",
  "comster404",
  "ESL_SC2", 
  "OgamingSC2", 
  "cretetion", 
  "freecodecamp", 
  "storbeck", 
  "habathcx", 
  "RobotCaleb", 
  "noobs2ninjas"
];

function getURL(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.addEventListener("load", function() {
    if (req.status < 400) {
      callback(req.responseText);
    } else {
      callback(null, new Error("Request failed: " + req.statusText));
    }
  }); 
  req.addEventListener("error", function() {
    callback(null, new Error("Network error"));
  });
  req.send(null);
}

// need function to handle the data

function getData(chan) {
  // maybe loop here?
  url = "https://api.twitch.tv/kraken/streams/" + chan;
  // call getURL to get the API data with the data handle function as callback
}




/*

function getData(chan) {
  url = "https://api.twitch.tv/kraken/streams/" + chan;
  console.log(url);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        data = JSON.parse(xmlhttp.responseText);
        classifyResponse(data, chan);
      } else {
        data = { "stream": "no account" };
        classifyResponse(data, chan);
      }
    }
  }
}

function classifyResponse(data, chan) {
  if (data.stream == null) {
    status = "Offline";
    logo = "https://static-cdn.jtvnw.net/jtv-static/404_preview-300x300.png";
    channelName = chan;
  } else if (data.stream == "no account") {
    status = "No account";
    logo = "https://static-cdn.jtvnw.net/jtv-static/404_preview-300x300.png";
    channelName = chan;
  } else {
    status = data.stream.channel.status;
    logo = data.stream.channel.logo;
    channelName = data.stream.channel.display_name;
  }

  res.push([
    channelName,
    status,
    logo
  ]);
  	updateHTML(res);  
}

function update(channels) {
  for (var i = 0; i < channels.length; i++) {
    getData(channels[i]);
  }
}

function updateHTML(res) {
    for (var i = 0; i < channels.length; i++) {
    	console.log("updateHTML, i: " + i);
    	console.log(res[i]);
    }

}

window.onload = function() {
  update(channels[0]);
}

*/