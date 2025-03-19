/*
	Name exercise: third
	Description: calculation of net salary with deductions
	Autor:Esteban
	Date: 19th march 2025
*/

let salaryMin = 1400000;
let salary = salaryMin;
let subTransport;
let health;
let pension;
let arl;
let total;

if (salary * 2 < salaryMin) {
	subTransport = 114000;
} else {
	subTransport = 0;
}

salary = salary + subTransport;

health = salary * 0.12;
pension = salary*0.16;
arl = salary * 0.052;

total = salary - health - pension - arl;

if (total < salaryMin * 4) {
	total = total * 0.04;
}

console.log("The total to pay is:" + total);