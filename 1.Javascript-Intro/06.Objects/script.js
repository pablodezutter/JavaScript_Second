//in an array

// let strongMan=["beard", 30, "strong", 175 ]

// create an object
//object literal
//An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

let strongMan = {
face:"beard",
age : 30,
strength:"strong",
length: 175
}

// let myFirstObject = {
//     //add necessary properties
//     exampleKey: exampleValue
 
//     functionName: function(){
//         //Function goes here
//     }
// };
// You can use your method by calling it like this:
//     myFirstObject.functionName();


//strongly advised not to use!
// var strongMan= new Object();
// strongMan.face="beard";
// strongMan.age= 30;
// strongMan.strength="strong";
// strongMan.length= 175;

// let person = {

// age: 38,
// gender: "man"

// }

// objectName.property         // person.age
// or

// objectName["property"]      // person["age"]
// or

// objectName[expression]      // x = "age"; person[x]


let main_color= "black"
let boxer ={
color: main_color,
type: "freestyle",
hps: 1,
weakness: "left eye",
strong: ["knockles","fast","hard punch"],
kick: function(){
    console.log("kick ass");
    console.log(this.weakness);
    console.log("knockout");

    }
};

boxer.kick();

for(let key in boxer){
    console.log(typeof key);
    // console.log(key);
    // console.log(boxer[key]);
}


// let main_color = "#FF0000";
// let chair = {
//     color : main_color,
//     feet : 4,
//     things : ["paper","remote control","USB stick"],
//     knock : function(){
//         console.log( "TAP TAP !");
//         console.log( chair.things );    // ["paper",..] if reference is used 
//         console.log( this.things );     // ["paper",...] if other instances are used
//     }
// };

// // console.log( chair[feet] );            // not good
// console.log( chair.feet );             // -> 4
// console.log( chair["feet"] );          // -> 4

// chair.knock();                          // launches the knock method

// for(let key in chair){                  // loop
//     console.log( typeof key );          // displays the key type: String
//     console.log( key );                 // displays each key of my object ("color", "feet"..)
//     console.log( chair[key] );          // displays each value ("#FF0000", 4,...)
// }