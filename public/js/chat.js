const socket = io();
const log = console.log;

const form = document.querySelector("#chatForm");
const ul = document.querySelector("#messages");

form.addEventListener("submit", e => {
  const input = document.querySelector("#m");
  const message = e.target.elements.chatMessage.value;
  socket.emit("chat message", message);

  input.value = "";

  e.preventDefault();
});

socket.on("chat message", msg => {
  // Receiving the message and displaying on the screen
  const list = document.createElement("li");
  const text = document.createTextNode(msg);
  list.appendChild(text);

  ul.appendChild(list);
});
