var commands = require('./commands');
var fs = require('fs');

module.exports = function() {

    process.stdin.on("data", function(data) {
	var data = data.toString().split(" ");
        var cmd = data[0].trim();
        if (data.length === 2) {
            var arg = data[1].trim();
        } else { arg = undefined; }
	if (cmd in commands) {
	    commands[cmd](arg);
	} else {
            console.log("[Error] " + cmd + ": command not found");
        }
        process.stdout.write("> ");
    });
}
