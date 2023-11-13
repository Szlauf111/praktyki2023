const oblicz =()=>{
    let tab1 = [1, 5 ,10 ,15];
    let tab2 = [1,1, 3, 3, 4 ,4];
    let tab3 = ["ala", "robert", "stanislaw"];

    BubbleSort(tab1);
    document.write("<br> Druga najwieksza liczba: " + naj(tab1) + "<br><br>");
    BubbleSort(tab2);
    document.write("<br> Druga najwieksza liczba: " + naj(tab2) + "<br><br>");
    BubbleSort(tab3);
    document.write("<br> Drugie najwieksze slowo: " + naj(tab3) + "<br>");
}

const BubbleSort =(tab)=> {   
    for (let i = 0; i < tab.length; i++) {  
        for (let j = 0; j < (tab.length - i - 1); j++) { 
            if (tab[j] > tab[j + 1]) { 
                let temp = tab[j] 
                tab[j] = tab[j + 1] 
                tab[j + 1] = temp 
            } 
        } 
    }  
    document.write(tab); 
}

const naj =(tab)=>{
    let max =0;
    let naj = 0;

    for(let i = 0; i <tab.length; i++){
        if(typeof tab[i] == "number"){
            max = tab[i];
            for(let j = 0; j<(tab.length); j++){
                if(tab[j] > max){
                    max = tab[j];
                    naj = tab[j-1];
                }
            }
            return naj;
        }else if(typeof tab[i] == "string"){
            max = tab[i];
            for(let j = 0; j<(tab.length); j++){
                if(tab[j].length > max.length){
                    max = tab[j];
                    naj = tab[j-1];
                }
            }
            return naj;
        }
    }
}

oblicz();