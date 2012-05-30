var exec = require("child_process").exec;
var fs = require('fs');

function start(params, response) {
	response.writeHeader(200, {'content-type' : 'text/plain'});
	exec('find /', {timeout: 10000, maxBuffer: 20000 * 1024},
	function(error, stdout, stderr) {
		response.write(stdout);
		response.end();
	});

	console.log('func start() begin.');
}

function registration(params, response) {
	response.writeHeader(200);
	response.write(fs.readFileSync('./registrationForm.html', 'utf8'));
	response.end();
	console.log('func registration() begin.');
}

function login(params, response) {
	console.log('func login() begin.');
	response.writeHeader(200, {'content-type' : 'text/plain'});
	response.write('login failed!!!');
	response.end();
}

function upload(params, response) {
	console.log('func upload() begin.');
}

function bonus(params, response) {
	console.log('func bonus() begin.');
}

exports.start = start;
exports.registration = registration;
exports.login = login;
exports.upload = upload;
exports.bonus = bonus;

