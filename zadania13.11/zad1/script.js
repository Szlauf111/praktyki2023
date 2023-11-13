const kalkulator =(num, liczba1, liczba2)=> {
    switch (num) {
      case 'dod':
        return liczba1 + liczba2;
      case 'ode':
        return liczba1 - liczba2;
      case 'mno':
        return liczba1 * liczba2;
      case 'dzi':
        if (liczba2 !== 0) {
          return liczba1 / liczba2;
        } else {
          return "nie dzieli sie przez 0";
        }
    }
  }
  
  const kalk =()=> {
    var a = parseFloat(document.getElementById("liczba1").value);
    var b = parseFloat(document.getElementById("liczba2").value);
    var num = document.getElementById("select").value;
    var wynik = kalkulator(num, a, b);
    document.getElementById("wynik").innerHTML = "wynik: "+wynik;
  }