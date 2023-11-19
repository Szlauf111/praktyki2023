const multiplyAsync =(x, y)=>{
    return promise = new Promise((udalosie, nieudalosie) => {
        if(typeof(x) == 'number' && typeof(y) == 'number'){
            udalosie(x*y);
        }else{
            nieudalosie("wprowadz odpowiednie liczby");
        }
    });
}

multiplyAsync(5,10)
.then((wynik)=>{
    console.log("wynik mnozenia: "+wynik);
})
.catch(console.error);

multiplyAsync(5,'10')
.then((wynik)=>{
    console.log("wynik mnozenia: "+wynik);
})
.catch(console.error);