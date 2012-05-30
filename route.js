
function route(handle, pathname, params, response) {

	console.log('About to route a request for - ' + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname](params, response);
	} else {
		console.log('No request handler found for ' + pathname);
		response.writeHeader(404, {'Type-Content' : 'text/plain'});
		response.write('Sorry Mario, but you princess in the anoter castle.');
		response.write(' 404 :(');
		response.end();
	}
}

exports.route = route;
