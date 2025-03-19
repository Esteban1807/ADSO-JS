/*
	Name exercise: gravityPotentialEnergy Potential Gravity
	Description: Calculate potential energy grativy
	Autor:Esteban
	Date: 19th march 2025
*/

const gravity = 9.81; 
let mass, height, totalEnergy = 0;
let counter = 0;

while (true) {
    mass = parseFloat(prompt("Enter the mass of the object (kg):"));
    height = parseFloat(prompt("Enter the height of the object (m):"));

    if (height < 0) {
        console.log("Program finished.");
        break;
    }

    let gravityPotentialEnergy = mass * gravity * height;
    totalEnergy += gravityPotentialEnergy;
    counter++;

    console.log(`Potential gravityPotentialEnergy: ${gravityPotentialEnergy.toFixed(2)} J`);
    console.log(`Total gravityPotentialEnergy accumulated: ${totalEnergy.toFixed(2)} J`);
    console.log(`Number of calculations performed: ${counter}`);
}