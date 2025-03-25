/*
    Name exercise: FORCE-WHILE
    Description: Write a mass and aceleration for calculate the force, calculate the total and end if mass or aceleration is negative
	Autor:Esteban
	Date: 19th march 2025
*/

let mass;
let acceleration;
let totalForce = 0;
let force = 0;
let counter = 0;
mass = parseFloat(prompt("Write the mass (negative to exit): "));
acceleration = parseFloat(prompt("Write the acceleration (negative to exit): "));

while (mass >= 0 && acceleration >= 0) {
    counter++;

    force = acceleration * mass;

    totalForce = totalForce+ force;

    console.log("Force: " + force);
    mass = parseFloat(prompt("Write the mass (negative to exit): "));
    acceleration = parseFloat(prompt("Write the acceleration (negative to exit): "));
}

console.log("The total forces: " + totalForce);
console.log("Number of procedures: " + counter);
