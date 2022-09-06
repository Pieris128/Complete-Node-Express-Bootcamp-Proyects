const EventEmmiter = require("events");
const http = require("http");

class Sales extends EventEmmiter {
  constructor() {
    super();
  }
}

const myEmmiter = new Sales();

myEmmiter.on("newSale", () => {
  console.log("There was a new Sale!!!");
});

myEmmiter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmmiter.on("newSale", (stock) => {
  console.log(`There are now ${stock} item left in stock`);
});

myEmmiter.emit("newSale", 9);

//////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request recieved");
});

// server.on("request", (req, res) => {
//   res.end("Another request recieved");
// });

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
