const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const log = console.log;

const port = process.env.PORT || 3000;

const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

io.on("connection", socket => {
  socket.emit("new user", "Welcome to the room!");

  socket.broadcast.emit("announcement", "a new user joined...");

  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    io.emit("announcement", "a user just left...");
  });
});

http.listen(port, () => {
  log(`listening on ${3000}`);
});
