/*
	Name exercise: Motion Simulation
	Description: Calculate how much distance an object travels
	Autor:Esteban
	Date: 19th march 2025
*/

let mass = parseFloat(prompt("Enter the mass of the object (kg):"));
let force = parseFloat(prompt("Enter the applied force (N):"));

if (force === 0) {
    console.log("The object remains at rest.");
} else {
    let acceleration = 0, velocity = 0, totalDistance = 0;
    let movingTime = 0;

    acceleration = force / mass;

    while (true) {
        velocity += acceleration * 1;

        let distance = velocity * 1;
        totalDistance += distance;

        movingTime++;

        console.log(`Moving time: ${movingTime} s`);
        console.log(`Current speed: ${velocity.toFixed(2)} m/s`);
        console.log(`Total distance traveled: ${totalDistance.toFixed(2)} m`);
        break;
    }
}