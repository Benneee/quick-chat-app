const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const log = console.log;

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  socket.on("chat message", msg => {
    log("message: " + msg);
    io.emit("chat message", msg);
  });
});

http.listen(port, () => {
  log(`listening on ${3000}`);
});
