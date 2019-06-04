# Javascript

## Control structures

When writing code, you will use logic to make decisions. JavaScript provides control structures to help implement your logic.

### Conditions

#### if

The `if` statement allows you to execute code if a certain condition is fulfilled. 

```
if ( true ) {
    // Execute this code
}
```

The code between the `{}` will only be executed if the condition between the `()` is `TRUE`.

```
const age = 100;

if ( age >= 18 ) {
	console.log("Have a glas of wine");
}
```

>The code between the `{}` is also called a **code block**.

#### else

The `if` statement lets us execute a code block if a condition is TRUE. But what if we want a different code block to be executed if the condition is FALSE? No problem, there's a solution for that! You can add an `else` statement that will be executed when the condition of your `if` statement is false.

```
const age = 100;

if (age < 18) {
	console.log("Grab a soda");
} else {
	console.Log("Drink a beer");
}
```

> Can you guess the output of this piece of code ?

#### else if

If you need to specify even further and add more conditions to check, you can use the `else if` statement.

```
const age = 19

if (age < 18) {
	console.log("Grab a soda");
} else if(18 < age < 21){
    console.log("Drink a beer");
}else {
	console.log("Take a shot");
}
```

#### switch

When using multiple `else if` statements your code can rapidly become unreadable. Another way to have check a condition in your code is by using a `switch` statement.
The `switch` statement is made up of mulitple `cases`. The `switch` statement checks
if the input matches any of the `cases` and executes the associated code.

```
let drink = 'Soda';

switch (drink) {
  case 'Soda':
    console.log(`${drink} costs: €2.`);
    break;
  case 'Beer':
    console.log(`${drink} costs: €2.5`);
    break;
  case 'Wine':
    console.log(`${drink} costs: €200`);
    break;
  default:
    console.log(`We don't serve ${drink}`);
}
```

This `switch` statement checks if the input matches with one of the cases. In this particular example we're checking if `drink` matches with any of the provided cases. If there is no match, the `switch` statement will fall back to the `default` case.

### Loops

Loops are ways to repeat a certain code block multiple times. The most common examples are the `for` and `while` loops. They combine a condition and a code block. The code block will be executed multiple times until the condition is no longer true.

#### while

A `while` loop will continue repeating as long as the condition between the `()` is TRUE. 

```javascript
var increment = 0;
while (increment <10) {
    console.log(increment);
    increment = increment + 1;
}
```

#### for

Just like the other control structures, the `for-loop` will execute a code block if a certain condition is fulfilled. However, the `for-loop` combines three instructions, separated by commas, between the `()`: initialization, condition and incrementing.

Initialization creates a variable to track your position in the loop.   
Condition checks if the loop should be repeated.  
The last argument will be executed at the end of each loop.  

```javascript
for (var i = 0; i < 10 ; i++) {
    console.log(i);
}
```

> You will often see for loops with the variable `i`, short for 'increment'.

**Return to**:  [Overview](../)  








