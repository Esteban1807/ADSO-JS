/*
	Name exercise: Work Machine
	Description: Calculate work with force and distance
	Autor:Esteban
	Date: 19th march 2025
*/

let force, distance, totalWork = 0;
let counter = 0;

while (true) {
    force = parseFloat(prompt("Enter the applied force (N):"));
    distance = parseFloat(prompt("Enter the distance traveled (m):"));

    if (distance < 0) {
        console.log("Program finished.");
        break;
    }

    let work = force * distance;
    totalWork += work;
    counter++;

    console.log(`Work done: ${work.toFixed(2)} J`);
    console.log(`Total work accumulated: ${totalWork.toFixed(2)} J`);
    console.log(`Number of calculations performed: ${counter}`);
}