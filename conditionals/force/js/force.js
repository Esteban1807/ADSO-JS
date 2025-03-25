/*
	Name exercise:Force
	Description: Determine the force of an object and compare it to a limit
	Autor:Esteban
	Date: 19th march 2025
*/


let mass = 40;
let acceleration = 25;
let force;

force = mass * acceleration;

if (force >= 100) {
	console.log("The force is high");
} else {
	console.log("The force is low");
}