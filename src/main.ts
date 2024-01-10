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
