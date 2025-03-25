/*
	Name exercise: gravityPotentialEnergy Potential Gravity
	Description: Calculate potential energy grativy
	Autor:Esteban
	Date: 19th march 2025
*/

let gravity = 9.81; 
let mass;
let height; 
let totalEnergy = 0;
let counter = 0;
let gravityPotentialEnergy;

mass = parseFloat(prompt("Enter the mass of the object (kg):"));
height = parseFloat(prompt("Enter the height of the object (m):"));

while (height!=0) {
    gravityPotentialEnergy = mass * gravity * height;

    totalEnergy = totalEnergy+gravityPotentialEnergy;
    counter++;

    console.log("Gravity Potential Energy= "+gravityPotentialEnergy);

    mass = parseFloat(prompt("Enter the mass of the object (kg):"));
    height = parseFloat(prompt("Enter the height of the object (m):"));

}
console.log("Total energy= "+totalEnergy);
console.log("calculation performed= "+counter);