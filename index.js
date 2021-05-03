const fetch = require("node-fetch");
var io = require('socket.io')(8081);
var express = require('express'); // include the express library
var server = express(); // create a server using express
server.listen(8080); // listen for HTTP
server.use('/', express.static('client')); // set a static file directory
console.log('Now listening on port 8080');


const endpoint = "entries"
const language_code = "en-us"

console.log('new branch')

var headers = {
  "app_id": "46b7f185",
  "app_key": "b0c747f6ecd5d547bc76cbb121380b11",
  "cache-control": "no-cache",
  "postman-token": "7036f406-7b96-a8ba-7bb4-673e2c0bdc60",
}


const getData = async url => {
  try {
    const response = await fetch(url, {
      headers: headers
    });
    const b = await response.json();
    return await b
  } catch (error) {
    console.log(error);
  }
};

io.sockets.on('connection', function (socket) {
  console.log('connection');
  socket.on("search", (term) => {
    url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${term}`
    getData(url)
    .then( res => socket.emit("result",res) )
  });
})