import './style.css'

const catArray = ["Meowy", "Lizie", "Miwo", "Zelda"];



/*
const catArrayCopy=[];
for (let i = 0; i < catArray.length; i++) {
  catArrayCopy.push(catArray[i]);  
}
//console.log(catArrayCopy);
*/

//Less code than looping and pushing.
const catArraySpread = [...catArray];
console.log(catArraySpread);

const catString = "SUPERCUTECATS";

const catStringSpread = [...catString];

console.log(catStringSpread);

const cat = {name: "meow", breed:"Barn cat"};
const copycat = {...cat};
console.log(copycat);

//Great operator but might not be very readable and understandable at a surface level..
//catFunction("Meow"); <- This wouldn't work since function is called before function initialization
const catFunction = function printCatSays(inputString:String){
  console.log("Cat says " + inputString);
}
catFunction("Meow");

/*
//Function can be called before function initialization. !!!!!BAD!!!!!
catFunction2("Nya");
function catFunction2(inputString:String){
  console.log("Cat says " + inputString);
}
*/