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

while (bulk >= 0) {
    counter++;
    bulk = parseFloat(prompt("Write the bulk (negative to exit): "));
   
    if (bulk < 0) {
        break;
    }

    planet = prompt("Select a planet (1 for Earth, 2 for Mars, 3 for Jupiter): ");
    if (planet == 1) {
        weight = bulk * 9.8;
    } else if (planet == 2) {
        weight = bulk * 3.71;
    } else if (planet == 3) {
        weight = bulk * 24.79;
    } else {
        console.log("Invalid number");
        continue;
    }

    totalWeight += weight;

    console.log("Weight: " + weight);
}

console.log("The total weight: " + totalWeight);
console.log("Number of procedures: " + counter);

