const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

const zad1 =(tab1, tab2)=>tab1.concat(tab2);
console.log("1. "+zad1(arr1, arr2));

const zad2 =(tab1)=>tab1.reverse()[0];
console.log("2. "+zad2(arr1));

const zad3 =(tab2, filter)=>tab2.filter(x => x.endsWith(filter));
console.log("3. "+zad3(arr2, 'ek'));

const zad4 =(num)=> num.reduce(sum=(x, y)=> x + y);
console.log("4. "+zad4(numbers));

const zad5 =(num)=> num.map(n => (n*n)+3);
console.log("5. "+zad5(numbers));

const zadDod1 =(num)=> num.filter(n => n%2==0);
console.log("Dodatkowe 1. "+zadDod1(numbers));

const zadDod2 =(num)=> num.reduce((naj, x) => x < naj ? x : naj);
console.log("Dodatkowe 2. "+zadDod2(numbers));