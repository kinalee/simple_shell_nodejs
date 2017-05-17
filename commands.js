var fs = require('fs');

module.exports = {
    "echo": function(arg) {
	try {
	    console.log(arg);
	} catch(err) {
	    process.stdout.write("");
	}
    },
    "exit": function() {
	process.exit(-1);
    },
    "quit": function() {
	process.exit(-1);
    },
    "cd": function(path) {
	process.chdir(path)},
    "ls": function(path) {
	if (path === undefined) { path = "."; }
	var files = fs.readdirSync(path)
	try {
	    files.forEach(function(file) {
		process.stdout.write(file + "\t");
		console.log("");
	    });
	} catch (err) {
	    console.log("[Error] Path not found");
	}
    },
    "pwd": function() {
	console.log(process.cwd());
    },
    "": function() {
	;
    }
}
