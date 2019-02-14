var app = require('http').createServer();
var io = module.exports.io = require('socket.io')(app);
const PORT = 3231;
const SocketManager = require('./SocketManger.js');
io.on('connection',SocketManager);

app.listen(PORT,()=>{
    console.log("Connected  to port:"+ PORT);
})