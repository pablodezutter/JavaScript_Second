# JavaScript - Variables

### Learning goals

Make sure you can answer the following questions after finishing:

- What is a variable ?
- How do you declare a variable ?
- What are the tree different keywords to declare a variable in JS ?
- What's the difference between them, when should they be used ?
- How do you properly name a variable ?

## What are variables for?

In computer programming variables are used to store information. Storing data in a variable can help you to avoid repetition and make your code more readable ( use descriptive names ! ).

```js
const restaurantName = 'Pizzeria Del Piero';
```

A variable is like a labeled box. You can put items inside the box and give the box a label that describes the content. Later, when you want to reuse the values inside the box, you just have to point to the label. In the above example we create a variable with the name *restaurantName* to store ... the name of a restaurant. 

## Variables in JS

To create a variable in JS, the first thing you have to do is *declare* it. In many programming languages the way you declare a variable depends on the type of variable. This is **not** the case in JS, because JS is a **loosely typed** language. There are 3 different ways to declare a variable in JS.
When a variable is declared with a name you can initialize it by assigning a value to it. 

### Declaring 

#### `var`

Until the introduction of ES6 using the `var` keyword was the only way to declare a variable in JS. A variable declared with `var` is accessible everywhere in your application and can be adjusted after its creation. You will encounter this way of declaring variables when reading older JS code. 

```js
var length = 170;
```

#### `let`

With the introduction of ES6 came a new keyword to declare variables: `let`. Just like with `var` a `let` variable can be adjusted after its declaration. However, where a `var` variable is available everywhere in you code, a `let` variable only exists between the curly brackets `{}` where it was declared. In other words, a `let` variable is **block scoped**. A `const` variable however can't be changed after it's initialized. 

```js
let x = 1;

if(true){
  let x = 2;

  console.log(x); // output: 2
}

console.log(x); // output: 1
```

In the above example we declare a variable `x` and initialize it with the value 1. Inside the `if statement` we declare a second variable with the same name and type, but with a different value. We do two logs of the variable `x` and receive two different outputs. Can you explain how this is possible?

#### `const`

`let` wasn't the only new way to declare a variable that was introduced with ES6. Next to `let` a second new keyword was added: `const`. Just like a `let` variable, a `const` variable is **block scoped**. However, a variable declared with `const` cannot be adjusted after it is initialized. Therefore we always immediatly initialize a `const` variable.

```js
const name = 'John';

console.log('My name is' + name); // output: My name is John

name = 'Mark'; // This will result in an error
```

#### `var`, `let` or `const` ?

To avoid errors in your code, the use of `var` to declare variables is discouraged. 

> It's a good practice to declare your variables with `const`. If the value needs to be adjusted later, you change `const` to `let`.


### Initializing 

Initializing a variable happens when you assign a value to it. For a `const` value this happens at the time of declaring the variable. A `let` variable does not have to be initialized immediately upon creation.

### Naming

There are a few rules for naming your variable in JS:

- The name can consist of letters, numbers, `$` and `_`
- The name does not begin with a number

> It's a good practice to **camelCase** longer variable names. This means you capitalise the first letter of each new word in the variable name.

```js
const firstName = 'John';
const lastName = 'Doe';
```

**Return to**:  [Overview](../)  
