
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

/* app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
}); */

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on("message",function(a){
    console.log("recibido mensaje: "+a);
    io.emit("message",a);
  })
});




http.listen(3000, function(){
  console.log('listening on *:3000');
});