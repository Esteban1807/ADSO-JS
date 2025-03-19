/*
	Name exercise: seventh
	Description: Calculate the friction of an object on a surface
	Autor:Esteban
	Date: 19th march 2025
*/


let frictionForce;
let bulk = 8;
let frictionCoefficient = 0.4;
let gravitationalAcceleration = 10;

frictionForce = frictionCoefficient * bulk * gravitationalAcceleration;

console.log("The friction force is: "+ frictionForce);

if (frictionForce < 50) {
	console.log("The friction is low");
}
else {
	console.log("The friction is high");
}