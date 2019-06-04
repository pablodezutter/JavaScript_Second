//create an array

const food=["fish", "potatoes", "meat"];
console.log(food);
//change an element
food[1] = "vegetables";
console.log(food);
//add a thing or two
food.push("pasta", "fruit");
console.log(food);
//remove the last item
food.pop();
console.log(food);
//remove the last item and store it
var takenItem= food.pop();
console.log(takenItem);

//loop
//let text= document.getElementById("showResult");
const lekkers=(foodies)=>{
    console.log("njammie"+ " " + foodies);
}
food.forEach(foodies => lekkers(foodies));