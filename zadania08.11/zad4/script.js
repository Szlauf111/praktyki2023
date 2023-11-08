const oblicz =()=>{
var tab1 = [10, 11, "Hania", 11];
var wynik = tab1.filter(filtr);
console.log(wynik);
}

const filtr =(numer)=>{
if(numer === 11){
    return numer;
}
}
oblicz();