/*
    Name exercise: PLANETS-WHILE
    Description: Write a bulk and select a planet (earth,mars,jupiter) and calculate the gravity, calculate the total and end if bulk is negative
	Autor:Esteban
	Date: 19th march 2025
*/

let bulk = 0;
bulk = parseFloat(bulk);
let planet;
let weight = 0;
let totalWeight = 0;
let counter = -1;
bulk = parseFloat(prompt("Write the bulk (negative to exit): "));

while (bulk >= 0) {
    counter++;

    planet = prompt("Select a planet (1 for Earth, 2 for Mars, 3 for Jupiter): ");
    if (planet == 1) {
        weight = bulk * 9.8;
	console.log("Weight in Earth: " + weight);    
    } else if (planet == 2) {
        weight = bulk * 3.71;
	console.log("Weight in Mars: " + weight);    
    } else if (planet == 3) {
        weight = bulk * 24.79;
	console.log("Weight in Jupiter: " + weight);    
    } else {
        console.log("Invalid number");
        continue;
    }

    totalWeight += weight;
    bulk = parseFloat(prompt("Write the bulk (negative to exit): "));
}

console.log("The total weight: " + totalWeight);
console.log("Number of procedures: " + counter);

