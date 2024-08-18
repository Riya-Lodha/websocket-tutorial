// import express from "express";
// import { WebSocketServer } from "ws";

const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();
const port = 8080;

const server = app.listen(port, () => { //This is an http server
    console.log("server is listening");
});

const wss = new WebSocketServer({ server }); // This is a web socket server, both are running on same port.

wss.on("connection", (ws)=>{ //connection is an event and ws is web socket connection for specific client.
    ws.on("message", (data)=> {
        console.log("data from client : %s", data);
        ws.send("thanks client");
    });
});
