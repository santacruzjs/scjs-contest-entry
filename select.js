var random = require('random-number-generator'),
	commandLineArgs = require('command-line-args'),
	entries = require('./entries.js').entries;

var cli = commandLineArgs([
	{ name: 'select', alias: 's', type: Number }
]);

var options = cli.parse();

for (var i = 0; i < options.select; i++) {
	var maxOptions = entries.length - 1;
	var selected = random(maxOptions, 0);
	
	console.log("Selected: " + JSON.stringify(entries[selected]));
	entries.splice(selected, 1);
}