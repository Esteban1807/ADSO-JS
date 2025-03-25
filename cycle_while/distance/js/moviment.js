/*
	Name exercise: Moviment Simulation
	Description: Calculate how much distance an object travels
	Autor:Esteban
	Date: 19th march 2025
*/

let mass = parseFloat(prompt("Enter the mass of the object (kg):"));
let force = parseFloat(prompt("Enter the applied force (N):"));
let aceleration;
let velocity=0  ;
let time=0;
let distance;

while(force!=0){
    time=time+1;
    aceleration=mass*force;

    velocity=velocity+aceleration*time;
    distance=velocity*time;
    force = parseFloat(prompt("Enter the applied force (N):"));
}

console.log("Distance: "+distance);
console.log("Time: "+time);