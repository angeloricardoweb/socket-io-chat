const express = require("express");
const app = express();
var http = require("http").createServer(app);
const io = require("socket.io")(http);

app.set("view engine", "ejs");

io.on("connection", (socket) => {
  socket.on("desconnect", () => {
    console.log("Conexão encerrada");
  });
  socket.on("msg", (data) => {
    //emit a msg para todos que estão conectados
    io.emit("showMsg", data);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

http.listen(8080, () => {
  console.log("🔥 server is running in port 🔊 http://localhost:8080");
});
