/*
	Name exercise: fourth
	Description: Calculate the final grades
	Autor:Esteban
	Date: 19th march 2025
*/

let gradeOne = 3.0;
let gradeTwo = 4.5;
let gradeThree = 2.5;
let gradeFinal;

gradeFinal = (gradeOne * 0.20) + (gradeTwo * 0.35) + (gradeThree * 0.45);

console.log("The final grade is: "+ gradeFinal);

if (gradeFinal >= 4.5){
	console.log("Top grade");}
else if (gradeFinal < 4.5 && gradeFinal >=3.5){
	console.log("Good grade");}
else if (gradeFinal < 3.5 && gradeFinal >=3.0){
	console.log("Regular grade")}
else{
	console.log("Bad grade")}