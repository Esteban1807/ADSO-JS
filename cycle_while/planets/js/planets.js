/*
    Name exercise: PLANETS-WHILE
    Description: Write a mass and select a planet (earth,mars,jupiter) and calculate the gravity, calculate the total and end if mass is negative
	Autor:Esteban
	Date: 19th march 2025
*/

let mass;
let planet;
let weight = 0;
let totalWeight = 0;
let counter = 0;
mass = parseFloat(prompt("Write the mass (negative to exit): "));
while (mass >= 0) {
    counter++;
   
    planet = prompt("Select a planet (1 for Earth, 2 for Mars, 3 for Jupiter): ");
    if (planet == 1) {
        weight = mass * 9.8;
	console.log("Weight on Earth: " + weight);
    } else if (planet == 2) {
        weight = mass * 3.71;
	console.log("Weight on Mars: " + weight);
    } else if (planet == 3) {
        weight = mass * 24.79;
	console.log("Weight on Jupiter: " + weight);
    } else {
        console.log("Invalid number");
        continue;
    }

    totalWeight += weight;

    mass = parseFloat(prompt("Write the mass (negative to exit): "));
}

console.log("The total weight: " + totalWeight);
console.log("Number of procedures: " + counter);

