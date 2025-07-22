const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      fs.readFile(
        path.join(__dirname, "views", "index.html"),
        (err, content) => {
          if (err) {
            throw err;
          }
          res.end(content);
        }
      );
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      fs.readFile(
        path.join(__dirname, "views", "about.html"),
        (err, content) => {
          if (err) {
            throw err;
          }
          res.end(content);
        }
      );
    } else if (req.url === "/api/users") {
      res.writeHead(200, {
        "Content-Type": "text/json; charset=utf-8",
      });
      const users = [
        {
          name: "Stanislav",
          age: 25,
        },
        {
          name: "Elena",
          age: 28,
        },
      ];
      res.end(JSON.stringify(users)); //
    }
  } else if (req.method === "POST") {
    const body = [];
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    req.on("data", (data) => {
      body.push(data);
    });
    req.on("end", () => {
      const message = Buffer.concat(body).toString().split("=")[1];
      res.end(`
      <h1>Your message: ${message}</h1>
      `);
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running...");
});

