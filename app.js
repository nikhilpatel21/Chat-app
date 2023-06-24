
const express=require('express');
const app=express();


const { Server}=require('socket.io');
const http=require('http');
const server=http.createServer(app);
const io=new Server(server);


app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html');
})
io.on("connection", (socket)=>{
    socket.on('send name',(username)=>{
        io.emit('send name',(username));
    })

    socket.on('send message', (chat)=>{
        io.emit('send message',(chat));
    })

})

server.listen(5000,()=>{
    console.log('server running at 5000');
})
