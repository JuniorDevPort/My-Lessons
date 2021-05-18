// This is done in javascript/P5.

//Question answered in this file: How do i create an assert test in P5 library and portray how i envision the process of developing a simple testcase. 

// This document shows the development of my concept of testing from versions. I will start with the most complex and latest version and down to the first version for the convenience of the viewer who is preferably
//the possible employer. This build up also needs to show my understanding of version control and iterations ofa developing an answer to a problem or question.



//So here i demonstrate the concept of a test. I create a variable and the assert it with === operator to do a check. I imagine writing tens of these tests would mean that 
//i would create a claas, that utilizes 


//whether my input conditions are correct and then the output.
//As i understand, unit testing is about known inputs and known outputs and known operations. in Test Driven Development methodology 
//i would now write the absolute minimal amount of code to pass the Test condition, the code should represent the WHAT in my functionality 
//as in what am i trying to achieve, what does  the code have to do for the client/userside.
//on running the test, you will get an outup of a "Failed" string. Which is necessary to verify that the testcode is working.

/////////////////////////////////////////////////////////////////////////////// v 1.0 /////////////////////////////////////////////////////////////////////////////////////////
//Testing the test to fail
var i = 0;

if (i === 1){
	
	
	  console.log("Success");
	
	  
	  
	} else {
		console.log("Failed");
		
}
}

/////////////////////////////////////////////////////////////////////////////// v 1.0 /////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////// v 2.0 /////////////////////////////////////////////////////////////////////////////////////////
// starting to modularize code and manipulating controlflow
var i = 0;



function testVariable(x) {
 
	if (i === 1){

		console.log("Success");
  		i = 555; // freely picked number that stands out


	} else {
		
		console.log("Failed");

	}
}

testVariable(i);

console.log(i);

/////////////////////////////////////////////////////////////////////////////// v 2.0 /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////// v 3.0 /////////////////////////////////////////////////////////////////////////////////////////
// changing the variable value, testing it and getting a Succes logged into console. A succesful test!

var i = 0;



function testVariable(x) {
 
	if (i === 1){

		console.log("Success");
  		i = 555;

	} else {
		
		console.log("Failed");

	}
}

function changeVariable(x) {
	
	i = 1;
	
}

changeVariable(i); 

console.log(i); // var i is now 1

testVariable(i);

console.log(i); // var i is now 555

/////////////////////////////////////////////////////////////////////////////// v 3.0 /////////////////////////////////////////////////////////////////////////////////////////
