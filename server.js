var http = require('http');
var url = require('url');
var utils = require('./utils');

function start(route, handle) {
	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;
		var params;// = url
		
		route(handle, pathname, params, response);
/*
		response.writeHead(200, {"content-type" : "text/plain"});
		response.write("HELLO WORLD\n");

		response.write(request.toString());
		response.write(utils.printObjectStruct(request));

	  	response.end();
*/
		console.log('onRequest, url - ' + request.url);
	}
	http.createServer(onRequest).listen(8888);
	console.log('web server has started.');
}

exports.start = start;

StalinIsGood1
