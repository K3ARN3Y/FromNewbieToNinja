console.log(module);

var command = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

if (command === "add") {
	console.log(a+b);
} else if (command === 'subract') {
	console.log(a-b);
} else if (command === 'multiply') {
	console.log(a*b);
} else {
	console.log('Not a command or no command provided.');
}