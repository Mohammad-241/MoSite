function test1(){

	var fName = prompt("Hey what's your name?");
	var myColour = prompt("Pick a colour, " + fName);

	if(myColour == "red"){

		console.log("ha. this guy likes red");
	} 
	else if(myColour == "green"){
		console.log("ah, green. He's alright.");
	}
	else if(myColour == "yellow"){
		console.log("het him something yellow.");
	}
	else {
		console.log("that's not a color");
	}
}

function test2(){    
	var age=prompt("how old are you?");
	

	if(age < 14){
		alert("GET OUUUUTTT");

	}
	else if(age == 14){
		alert("14 is a good age");

	}
	else if(age > 14){
		alert("YOU ARE IIIINNNN");

	}
	else{
		alert("Not a valid age");
	}
}


function FizzBuzz(){
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
=======
function test1(){

	var fName = prompt("Hey what's your name?");
	var myColour = prompt("Pick a colour, " + fName);

	if(myColour == "red"){

		console.log("ha. this guy likes red");
	} 
	else if(myColour == "green"){
		console.log("ah, green. He's alright.");
	}
	else if(myColour == "yellow"){
		console.log("het him something yellow.");
	}
	else {
		console.log("that's not a color");
	}
}

function test2(){    
	var age=prompt("how old are you?");
	

	if(age < 14){
		alert("GET OUUUUTTT");

	}
	else if(age == 14){
		alert("14 is a good age");

	}
	else if(age > 14){
		alert("YOU ARE IIIINNNN");

	}
	else{
		alert("Not a valid age");
	}
}


function Fizzbuzz(){
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}