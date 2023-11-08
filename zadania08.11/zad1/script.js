const oblicz =(x, y)=>{
    console.log(x);
    x--;
    
    if(x != y){
        oblicz(x, y);
    }else{
        console.log(x);
    }
}

oblicz(10, 1);