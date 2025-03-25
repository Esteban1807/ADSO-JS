/*
    Name exercise: actionandreaction-WHILE
    Description: Write a force and calculate the equivalent force, calculate the total and end if the force is 0 and the times of the procedure.
	Autor:Esteban
	Date: 19th march 2025
*/

let force = 0;
force = parseFloat(prompt("Write the force (equal to 0 to exit): "));
let totalForce = 0;
let counter=0;
let reactionForce;

while (force !== 0) {
    counter=counter+1;

    reactionForce = force * (-1);
    totalForce = totalForce+force;

    console.log("reaction Force: " + reactionForce);

    force = parseFloat(prompt("Write the force (write '0' to exit): "));
}

console.log("The total force: " + totalForce);
console.log("Number of procedures: " + counter);

