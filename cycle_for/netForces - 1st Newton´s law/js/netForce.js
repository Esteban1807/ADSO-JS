/*
	Name exercise: net forces - first Newton's law
	Description: calculate certain amount of net forces and says if the object is accelerating or no.
	Autor:Esteban
	Date: 19th march 2025
*/


let counter;
let netForce;
let limit = parseInt(prompt("Enter how many net forces to enter:"));

for(counter = 1; counter <= limit; counter++){
	netForce = parseInt(prompt(counter + ". Enter a net force:"));
	if(netForce == 0){
		console.log("The object remains at rest or in uniform motion");}
	else{
		console.log("The object is accelerating");}
}