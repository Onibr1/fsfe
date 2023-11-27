const http = require("http");

http.createServer(function (req, res) {
	res.write("On the way to becoming a fullstack engineer!");
	res.end();
}).listen(3000);

console.log("Started server on port 3000");
