const anagram =(form)=>{
    let slowo1 = BubbleSort(form.slowo1.value);
    let slowo2 = BubbleSort(form.slowo2.value);
    let dziala = true;

    if(dziala && slowo1.length == slowo2.length){
        wynik.innerHTML = "Te słowa są anagrami";
    }else{
        wynik.innerHTML = "Te słowa nie są anagrami";
    }
}

const BubbleSort =(tab)=>{
    for (var i = 0; i < tab.length; i++) { 
        for (var j = 0; j < (tab.length - i - 1); j++) { 
            if (tab[j] > tab[j + 1]) { 
                var temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp;
            }
        }
    }
    return tab;
}