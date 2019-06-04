# JavaScript

## Functions

Functions are reusable blocks of code that perform a particular action. To execute the code from a function, you just have to call the function by its name. Functions can receive parameters and can return values.

To invoke a function you need its name followed by `()`.

```
doSomething();
```

## Functions before ES6

Before ES6 the only way to create a function was by using the `function` keyword. You will encounter this way of declaring a function a lot in older code.


```
function functionName(parameters) {
	//code to be executed
}
```

You first use the keyword `function` followed by the name of your function and, if needed, add the parameters between brackets.

Let's create a function that receives two parameters `a` and `b`, and returns the sum.

```
function add(a, b) {
	return a + b
}
```

To execute this function, you call it by using its name and providing the parameters. The function wil return a value, so we will use a variable to store it.


```
var result = add(1, 2);

console.log(result); //output: 3

```

## Arrow functions

With the introduction of ES6 came a new way of declaring functions which no longer requires the `function` keyword.

An `arrow function` consists of the function parameters placed between `()` followed by an arrow `=>` and the code to execute between `{}`.

```
(param1, param2, ..., paramN) => { 
  // your code
 };
```

To be able to call the arrow function, we store it in a variable.

```
const myFunction = (param1, param2) => {
  // your code
};

myFunction(param1, param2);
```

**Arrow function tip:** an arrow function can have an `automatic return`. Do you spot the difference?

```
// Automatic return
const add = (num1, num2) => num1 + num2;

// Gewone arrow functie
const add =  (num1, num2) => {
  return num1 + num2;
}

```

> You just write the arrow function on 1 line and remove the `{}`

**Return to**:  [Overview](../)  
