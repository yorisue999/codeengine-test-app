const http = require('http');

http.createServer(function (request, response) {
   
   console.log('== codeengine-yoti-test-webapp Ver 1.0.2 ==');
   console.log('@method=' + request.method);
   console.log('@path=' + request.path);
   console.log('@headers=' + request.headers);
   console.log('@form=' + request.form);
   
   target = process.env.TARGET ? process.env.TARGET : 'World' ;
   msg = process.env.MSG ? process.env.MSG : 'Hello ' + target + '\n';
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end(msg + 'Ver 1.0.2');


}).listen(8083);

console.log('Server running at http://0.0.0.0:8083/  Ver 1.0.2');
