console.log("AF Labsheet 4 is completed.");

feature/Geethma/Creating_a_web_server
const http = require('http'); 
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('Hello World!'); 
  res.end(); 
}).listen(8080); 

