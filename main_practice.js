//Creates a function that alerts the user of their name and age.
function go(name, age){
    return name+' '+age;
}

//Creates a function that adds two numbers
function add(first, second){
    return first+second;
}

go('Jake', 20);  //Calls the go() function
go('Adam', 17);  //Calls it again

//Asks the user for their name and age for use by the go() function
alert('What is your first name?');
var firstName = prompt();

alert('What is your last name?');
var lastName = prompt();

alert('How old are you?');
var age = prompt();

//Combines the first and last name into one string
var name = firstName+' '+lastName;

//Calls the go() function with the new variables
go(name, age);


//Asks the user for two inputs as numbers
alert('Please enter a number...');
var firstNum = prompt();

alert('Please enter another number...');
var secondNum = prompt();

//Returns the sum of the two entered values
var sum = add(firstNum, secondNum);
alert(sum);
