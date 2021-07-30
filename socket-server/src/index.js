// import * as express from 'express`'

const cluster = require("cluster")

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server,{
    cors : {
        origin : ["http://localhost:4200"]
    }
});

io.on("connection", (client) => {
    console.log("CLIENT - ", client)
    console.log("Connected...")
    client.emit("acknowledge", {message : "SUCCESS"})
    client.on("message", ({message, chatterName}) => {
        console.log(chatterName + " Says : ", message)
        client.emit("message", {chatterName : 'Me', message})
        client.broadcast.emit("message", {chatterName, message})
        client.on("disconnect", () => {
            console.log("DISCONNECTED....")
        })
    })
})

server.listen(9090, () => console.log("Socket server running on PORT : 9090"))

// PM2

// npm install nodemon --save-dev
// npm install nodemon -g