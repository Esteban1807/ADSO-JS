/*
	Name exercise: Work Machine
	Description: Calculate work with force and distance
	Autor:Esteban
	Date: 19th march 2025
*/

let force; 
let distance;
let totalWork = 0;
let counter = 0;
let work;
force = parseFloat(prompt("Enter the applied force (N):"));
distance = parseFloat(prompt("Enter the distance traveled (m):"));

while (distance>0) {
    work = force * distance;
    totalWork = totalWork+ work;
    counter++;

    console.log("Work "+counter+"= "+work);
    force = parseFloat(prompt("Enter the applied force (N):"));
    distance = parseFloat(prompt("Enter the distance traveled (m):"));

}
console.log("Total Work= "+totalWork);
console.log("Total number of times calculated= "+counter)