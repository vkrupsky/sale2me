var server = require('./server.js');
var route = require('./route.js');
var requestHandler = require('./requestHandlers.js');

var handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/login'] = requestHandler.login;
handle['/registration'] = requestHandler.registration;
handle['/upload'] = requestHandler.upload;
handle['/bonus'] = requestHandler.bonus;



server.start(route.route, handle);
