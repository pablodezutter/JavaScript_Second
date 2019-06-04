# Javascript

## Arrays

An array is an ordered collection of data. Arrays can be used to store such a collection in 1 variable.
Because an array is an **ordered** collection, each element in the array has its own index. Thanks to this index we can easily retrieve a specific element from the array.
**Arrays start at 0**, this means the first element in an array has the index `0`. The index of the following elements is incrementally increased. The index of the last element in an array is 1 less than the length of the array.

In JavaScript an array can be created in 3 different ways.

```
const arr1 = [element0, element1, ..., elementN]; // Creates an array with the provided elements, can also be empty
const arr2 = new Array(element0, element1, ..., elementN); // Older method
const arr3 = new Array(arrayLength) // Creates an array with the given length.
```

Selecting a specific element in an array can be done by using it's index between `[]`.

```
const shoppingList = ['Milk', 'Bread', 'Beans'];

console.log(shoppingList[0]); // Output: 'Milk'
```

This syntax can also be used to change a certain value in your array.

```
shoppingList[1] = 'Cookies';
// shoppingList is now: ['Milk', 'Cookies', 'Beans']
```

To know the number of elements in your array by using the length property.

```
console.log(shoppingList.length); // Output: 3
```

The `push` and `pop` methods are used respectively to add or remove an element. 

```
shoppingList.push('New car');
// shoppingList is now: ['Milk', 'Bread', 'Beans', 'New car']
shoppingList.pop();
// shoppingList is now: ['Milk', 'Bread', 'Beans']
```

Javascript has a lot of functions built in to work with arrays.

In the following example we use the [``for each``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) function to execute a provided function on each element in the array:

```
const sayHello = (name) => {
    console.log("Hello from " + name);         // this function retrieves a paramater en prints a sentence to the console.
};

const persons = ["Tom", "Yoda", "Ron"];  // Create an array with elements and store it in the variable 'persons'
persons.forEach(person => sayHello(person));
```

**Return to**:  [Overview](../)  