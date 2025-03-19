/*
	Name exercise: Forces for
	Description: Calculates a certein amount of forces with different masses and accelerations.
	Autor:Esteban
	Date: 19th march 2025
*/

let mass;
let acceleration;
let force;
let limit = parseInt(prompt("Enter how many forces calculate:"));
let counter;

for(counter = 1; counter <= limit; counter++){
	mass = parseInt(prompt(counter + ". Enter the mass:"));
	acceleration = parseInt(prompt(counter +  ". Enter the acceleration:"));
	force = mass * acceleration;
	console.log(counter + ". The force is: "+ force);
}
