/*
	Name exercise: 5 times table
	Description: Calculate 5 times table 
	Autor:Esteban
	Date: 19th march 2025
*/

let counter = 1;
let number = 5;
let product = 1;

while (counter <= number) {
    product = number * counter;
    console.log(number + " X " + counter + " = " + product);
    counter++;
}
