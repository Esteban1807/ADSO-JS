/*
	Name exercise: Acceleration
	Description: Calculate the acceleration of an object subjected to a force
	Autor:Esteban
	Date: 19th march 2025
*/

let acceleration;
let bulk = 10;
let force = 15;

acceleration = force/bulk;

if (acceleration > 5) {
	console.log("The acceleration is high");
} else {
	console.log("The acceleration is low");
}