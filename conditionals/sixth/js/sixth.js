/*
	Name exercise: sixth
	Description: Comparison of two bodies in free fall
	Autor:Esteban
	Date: 19th march 2025
*/

let massOne = 15;
let massTwo = 20;
let forceOne;
let forceTwo;

forceOne = massOne * 9.81;
forceTwo = massTwo * 9.81;

if (forceOne > forceTwo) {
	console.log("Mass one is greater gravitational force");
} else if (forceTwo > forceOne) {
	console.log("Mass two is greater gravitational force");
} else {
	console.log("Gravitational forces are equal");
}