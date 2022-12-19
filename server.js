const http = require('http');

http.createServer(function (request, response) {
   
   console.log('== codeengine-yoti-test-webapp ==');
   console.log(request.method());
   console.log(request.path());
   console.log(request.getHeaders());
   console.log(request);
   
   target = process.env.TARGET ? process.env.TARGET : 'World' ;
   msg = process.env.MSG ? process.env.MSG : 'Hello ' + target + '\n';
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end(msg);
}).listen(8083);

console.log('Server running at http://0.0.0.0:8083/');
