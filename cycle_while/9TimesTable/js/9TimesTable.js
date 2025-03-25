/*
	Name exercise: 9 Times table
	Description: Calculate 9 times table and say wich number are pair or inpair
	Autor:Esteban
	Date: 19th march 2025
*/

number = 9;
let counter = 1;
let result

while (counter <= 5) {
    result = number * counter;
    if (result % 2==0){
        console.log(number+" X "+counter+" = "+result+" (even)");
    }else{
        console.log(number+" X "+counter+" = "+result+" (odd)");
    }
    counter++;
}