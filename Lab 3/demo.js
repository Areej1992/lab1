//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

function multiply()     //function definition
{
    var x = 25;
    var y = 42;
    var product = x * y;
    alert("Multiplication is " +product);
}

function divide()     //function definition
{
    var x = 48;
    var y = 12;
    var div = x / y;
    alert("Each child will get " +div + " pencils");
}

function average()     //function definition
{
    const array = [25,47,98,46,52];
    var sum = 0;
    for (var number of array){
        sum = sum+number;
    }

    avg = sum/array.length;
    alert("Average is " +avg);
}

function sumOfEven()     //function definition
{
    const even = [];
    var sum = 0;
    for (let i = 1; i <= 200; i++) {
        if (i%2==0) {
            sum = sum+i;
        } 
    }
    alert("Sum of even numbers is " +sum);
}

function fibonacci()     //function definition
{
    const array = [0,1];
    var x=0;
    var y=0;
    var sum =0;
    var i = 2;
while (i <20) {
    x= array[i-2];
    y= array[i-1];
    sum = x+y;
    array.push(sum);
    i++;
}
    alert("Fibonacci series is " +array);
}   

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
Loops:
For loop
While loop
Do while loop
Break
*/

function compare()
{
    var charlie = 162;
    var john = 135;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}
