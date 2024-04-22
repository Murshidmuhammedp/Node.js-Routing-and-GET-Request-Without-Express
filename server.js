const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {

    const q = url.parse(req.url, true);

    if (q.pathname === "/") {
        fs.readFile('welcome.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    } else if (q.pathname === "/signup") {
        fs.readFile('Details.html', (err, data) => {
            res.writeHead(200, { "content-type": "text/html" })
            res.write(data);
            res.end();
        })
    } else if (q.pathname === "/signupaction") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write(`<h1>First Name : ${q.query.fname}<br>
        Last name : ${q.query.lname}<br>E-mail : ${q.query.email}<br>Mobile : ${q.query.Mobile}</h1>`);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text.html' });
        res.write("PAGE NOT FOUND")
        res.end();
    }
})
server.listen(PORT, () => console.log(`server started on port : ${PORT}`));