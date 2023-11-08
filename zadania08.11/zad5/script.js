var tab = [2,4,6,8,10];

if (tab != isNaN) {
    var sum = 0;
for (var i = 0; i < tab.length; i++) {
  sum += tab[i];
}
console.log(sum);
}
else {
    alert("To nie są liczby");
}