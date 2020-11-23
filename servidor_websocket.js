const http = require('http');
const express=require('express');
const path = require('path');
const app=express();

const server=http.createServer(app);
app.set('port',process.env.PORT || 8080);
app.use(express.static(path.join(__dirname,'public')));
server.listen(app.get('port'),() =>{
	console.log("servidor escuchando en el puerto",app.get('port'));
});

//web socket
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', ()=>{
	console.log('new connection');
});