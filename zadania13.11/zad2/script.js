const oblicz =(form)=>{
    let slowo = form.slowo.value;
    
    if(slowo == Palindrome(slowo)){
        wynik.innerHTML = "slowo jest palindromem";
    }else{
        wynik.innerHTML = "slowo nie jest palindromem";
    }
}

const Palindrome =(slowo)=>{
    let wynik = "";
    for(let i = slowo.length-1; i>=0; i--){
        wynik = wynik + slowo[i];
    }
    return wynik;
}