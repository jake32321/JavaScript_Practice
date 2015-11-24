//Simple demo function
function go(){
  alert('Hello World!');
}

//Creates a list of fruits
var fruits = ['apples', 'oranges', 'bananas', 'cherry', 'mango', go]; //Functions can be added to a list
var numbers = [[666, 56, 21], 12, 65]; //List inside a list

//Changes different elements
fruits[0] = 'peaches';
fruits[3] = 'lemons';

fruits[5](); //This will also run the function

//Returns and removes the first element
fruits.shift();
alert(numbers.shift()); //Removes the first array and adds to the new variable
alert(numbers.pop()); //Takes the last element

//Prints the objects in the list
fruits.forEach(function(value, index){
  alert('I have '+value+' in my shopping bag.');
});

//While loop
var times = 0;
while(times <= 10){
  console.log('Tried it!', times);
  times++;
}

times = 0;
var run = true;

//Do while loop
do{
  times++;
  console.log('Tried it!', times);
  if(times < 11){
    run = false
  }
}while(run == true);

//For loop
for(var i = 0; i <= 10; i++){
  console.log('Tried it!', i);
}

for(var i = 0; i < fruits.length(); i++){
  console.log('I have a '+fruits[i]);
}
