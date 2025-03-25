/*
	Name exercise: Friction force
	Description: Calculate el friction force applied in different masses and the same friction coeficient.
	Autor:Esteban
	Date: 19th march 2025
*/

let counter;
let mass;
let gravity = 9.8;
let normalForce;
let frictionForce;
let limit = parseFloat(prompt("Enter how many masses to enter:"));
let frictionCoefficient = parseFloat(prompt("Enter the friction coefficient:"));

for(counter = 1; counter <= limit; counter++){
	mass = parseFloat(prompt(counter + ". Enter the mass:"));
	normalForce = mass * gravity;
	frictionForce = normalForce * frictionCoefficient;
	console.log(counter + ". The friction force is: " + frictionForce + " when the mass is "+ mass);
}	