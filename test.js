var i = 1;

function setup() {
	
	
}

if (i === 1){
	
	function draw() {
	  console.log("Success");
	  i = 0;
	  console.log(i);
	  noLoop();
	}
	
	
} else {
		console.log("Failed");
		i = 1;
}