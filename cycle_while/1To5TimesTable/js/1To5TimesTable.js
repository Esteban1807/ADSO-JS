/*
	Name exercise: 1 to 5 times table
	Description: Calculate 1 to 5 times tables and if the number is pair says buzz, but if its inpair says bass
	Autor:Esteban
	Date: 19th march 2025
*/

let counterOne = 1;
let counterTwo;
let product;
let even = 0;
let odd = 0;
let bassOrBuzz;

while (counterOne <= 5) {
    counterTwo = 1; 

    while (counterTwo <= 5) {
        product = counterOne * counterTwo;
        
        if (product % 2 == 0) {
            bassOrBuzz = "buzz";
            even = even + 1;
        } else {
            bassOrBuzz = "bass";
            odd = odd + 1;
        }

        console.log(counterOne + " X " + counterTwo + " = " + product + ", " + bassOrBuzz);
        counterTwo++;
    }

    counterOne++;
}

console.log("There's " + even + " even and there's " + odd + " odd numbers");
