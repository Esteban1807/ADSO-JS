/*
	name exercise: Salary
	description: Salary whit discounts
	autor: Esteban Ome
	date: march 15th 2025
*/

let daysWorked = 22;
let valueDay = 20000;
let salary;
let discounts;
let health;
let arl;
let netSalary;
let pension;

salary = daysWorked * valueDay;
health = salary * 0.12;
pension = salary * 0.16;
arl = salary * 0.052;
discounts = health + pension + arl;
netSalary = salary - discounts;

console.log("Salary= "+salary+ "\nHealth= " +health+ "\nPension	= " +pension+ "\nARL= " +arl+ "\nDiscounts= " +discounts+ "\nNet Salary= "+netSalary);