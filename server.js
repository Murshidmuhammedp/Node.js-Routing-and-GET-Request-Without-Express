const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write("Hello user this is Node js server");
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "server not found" }));
    }
})
server.listen(PORT, () => console.log(`server started on port : ${PORT}`));