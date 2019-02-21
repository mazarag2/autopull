const exec = require('child_process').exec

const DEFAULT_VAL = 120000
var interval;
if(!process.argv[2]){
	interval = DEFAULT_VAL;
}
else{
	interval = process.argv[2] * 1000;
}
setInterval(() => {

	var output = exec("git pull origin master",(error,stdout,stderr) =>{
		
	  console.log('stdout: ' + stdout);
	  console.log('stderr: ' + stderr);
	  if (error !== null) {
		console.log('exec error: ' + error);
	  }		
	});
},interval);
  