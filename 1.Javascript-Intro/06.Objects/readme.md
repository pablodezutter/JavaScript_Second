# Javascript

# Objects

We know we can store a collection of data in an array. This is useful to store similar data (colors, films, places, ...). When there's a lot of different data in an array, it can become confusing. Let's store some properties of a person in an array: 

```
const person = ["Jane", "blonde", 67, 175, "Charlie"]
```

You can try to guess what properties we describe here, but it this is obviously not a good way to store data like this.

Thankfully we can use **objects** to solve this problem. An object is a collection of `key:value` pairs that describe the object. This collection is placed between `{}` and separated by `,`.

```
let myFirstObject = {
    prop1: "first property",
    prop2: "second property" 
};
```

If we apply this to the previous example, the data becomes a lot clearer:

```
let person = {
	name: "Jane",
	hairColor: "blonde",
	weight: 67,
	height: 175,
	dog: "Charlie"
}
```


### Methods

Data in objects is stored in `key:value` pairs. the value in this key:value pair can be each possible type of data, even a function. A function in an object is also called a **method** of the object.


```
let myFirstObject = {
    //add necessary properties
    exampleKey: exampleValue
 
    functionName: function(){
        //Function goes here
    }
};
```

You can use your method by calling it like this:

```javascript
    myFirstObject.functionName();
```

### Literals & constructors

Up until now we have created objects by using the *literal* notation:


```
let myFirstObjectLiteral1 = {           
    exampleKey: exampleValue          
}; 
    
let myFirstObjectLiteral2 = {           
    exampleKey: exampleValue          
}; 
    
let myFirstObjectLiteral3 = {           
    exampleKey: exampleValue          
}; 
```

If we create multiple similar objects like this we have to repeat ourselves a lot. To prevent repetition in our code we can use an [object constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor). 

```
function Person(name, hair, weight, length, dog) {
    this.name = name;      
    this.hair = hair;
    this.weight = weight;
    this.length = length;
    this.dog = dog
};

let p = new Person("Jane", "blonde", 67, 175, "Charlie");


console.log(p.name); //Output: "Jane"
```

### Example

Example code, working with an object

```
let table = new Object();               // Old way of declaring
let table = {};                         // New way of declaring

let main_color = "#FF0000";
let chair = {
    color : main_color,
    feet : 4,
    things : ["paper","remote control","USB stick"],
    knock : function(){
        console.log( "TAP TAP !");
        console.log( chair.things );    // ["paper",..] if reference is used 
        console.log( this.things );     // ["paper",...] if other instances are used
    };
};

console.log( chair[feet] );            // not good
console.log( chair.feet );             // -> 4
console.log( chair["feet"] );          // -> 4

chair.knock();                          // launches the knock method

for(let key in chair){                  // loop
    console.log( typeof key );          // displays the key type: String
    console.log( key );                 // displays each key of my object ("color", "feet"..)
    console.log( chair[key] );          // displays each value ("#FF0000", 4,...)
}
```

**Return to**:  [Overview](../)  
