
const http = require("node:http");

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ status: "healthy" }));
    }

    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({
        message: "Hello from the AWS DevOps project!",
        version: "1.0.0"
      }));
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  createServer().listen(port, "0.0.0.0", () => {
    console.log(`Application running on port ${port}`);
  });
}

module.exports = { createServer };

