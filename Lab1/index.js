//we are using nodejs to create APIs

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello Neha!'); //write a response to the client
  res.end(); //end the response
  console.log("server is running on 8000 check on localhost");
  
}).listen(8000);