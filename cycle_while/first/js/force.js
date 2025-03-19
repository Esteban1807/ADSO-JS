/*
    Name exercise: FORCE-WHILE
    Description: Write a bulk and aceleration for calculate the force, calculate the total and end if bulk or aceleration is negative
	Autor:Esteban
	Date: 19th march 2025
*/

let bulk = 0;
let acceleration = 0;
let totalForce = 0;
let force = 0;
let counter = -1;

while (bulk >= 0 && acceleration >= 0) {
    counter++;

    bulk = parseFloat(prompt("Write the bulk (negative to exit): "));


    if (bulk < 0) {
        break;
    }

    acceleration = parseFloat(prompt("Write the acceleration (negative to exit): "));
    if (acceleration < 0) {
        break;
    }
    force = acceleration * bulk;

    totalForce += force;

    console.log("Force: " + force);
}

console.log("The total forces: " + totalForce);
console.log("Number of procedures: " + counter);
