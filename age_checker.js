//Prompt and stores the user's age
alert('Please enter your age...');
var age = prompt();

//Checks the user's input to see if it meets the condition
if(age < 16){
    alert('You are able to drive'); //Pass
} if(age > 30){
    alert('Of course you can drive!'); //Pass
} else {
    alert('You are too young to drive.  Try back in a year or two...'); //Fail
}
