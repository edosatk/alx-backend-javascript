process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?'+'\n');
process.stdin.on('readable', function(){
	let chunk = process.stdin.read();
	if(chunk !== null){
		process.stdout.write('Your name is: ' + chunk);
	}
});
process.stdin.on('exit', function(){
	process.stdout.write('This important software is now closing'+'\n');
});

