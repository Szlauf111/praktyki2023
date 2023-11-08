const oblicz =(x)=> {
    if(x < 2) return x;
    return (oblicz(x - 1) + oblicz(x - 2));
}

for(i = 0; i < 15; i++) console.log(oblicz(i));
