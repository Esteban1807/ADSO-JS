/*
	Name exercise: 5 times table
	Description: calculate and show the 5 times table
	Autor:Esteban
	Date: 19th march 2025
*/


let counter = 1;
let number = 9;
let product;

for(counter=1; counter<=5; counter++){	
	product = number*counter;
	console.log(number + " X " + counter + " = " + product);

    if (product % 2 == 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}