process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?'+'\n');
process.stdin.resume();
process.stdin.on('readable', function(){
	process.stdin.resume()
	let chunk = process.stdin.read();
	if(chunk){
		process.stdout.write('Your name is: ' + chunk);
	}
});
process.stdin.resume();
process.stdin.on('end', function(){
	process.stdout.write('This important software is now closing'+'\n');
});

