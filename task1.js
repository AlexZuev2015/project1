'use strict';
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html')
http.createServer(function(req, res) {
	if (req.url === '/about') {
		console.log(req);
	} else if (req.url === '/stop') {
		process.exit();
	} else if (req.url === '/contact') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    	res.end(index);
	} else {
		console.log(req.url);
		console.log(req.method);
		res.write('<h1>Hello World!</h1>');		
	}
	res.end();
}).listen(3000, function () {
 	console.log('Go to localhost:3000');
 });