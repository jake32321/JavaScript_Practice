//Creates a function that alerts the user of their name and age.
function go(name, age){
    return name+' '+age;
}

//Creates a function that adds two numbers
function add(first, second){
    return first+second;
}

//Gives different outputs based of the age of the user
function age_checker(age){
    if(age < 20){
      alert('You really aren\'t that old to be honest...');
    }
    if(age > 20 && age < 50){
      alert('You are starting to get up there in years my friend!');
    }
    if(age > 50 && age < 100){
      alert('You should have the senior discount by now.');
    }
    if(age >= 100){
      alert('Damn you\'re old!');
    }
    else{
      alert('That doesn\'t work with the value you entered...');
    }
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

//Calls the go() and age_checker() functions with the new variables
go(name, age);
age_checker(age);

//Asks the user for two inputs as numbers
alert('Please enter a number...');
var firstNum = prompt();

alert('Please enter another number...');
var secondNum = prompt();

//Returns the sum of the two entered values
alert(add(firstNum, secondNum));
