const a = 4;
switch (a) {
case 1:
console.log('El valor de a es 1');
break;
case 2:
console.log('El valor de a es 2');
break;
case 3,4:
console.log('El valor de a es 3 ó 4');
break;
default:
console.log('El valor de a es desconocido');
}
for (let i = 0; i < 5; i++) {
    // 0, 1, 2, 3, 4 (en distintas líneas)
    console.log(i);
    }
    const array = ['En', 'un', 'lugar', 'de', 'la', 'mancha'];
    const len = array.length;
    // recorre un array mediante un for clásico
    for (let i = 0; i < len; i++) {
    // En, un, lugar, de, la, mancha (en distintas líneas)
    console.log(array[i]);document.write(array)
    }
    // while
let contador1 = 0;
while (contador1 <= 5) {
contador1++;
}
// 6
console.log(contador1);
// do-while
let contador2 = 0;
do {
contador2++;
} while (contador2 <= 5);
// 6
console.log(contador2);
let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch(favDrink) {
  case "Coca-Cola":
    text = "Excellent choice! Coca-Cola is good for your soul.";
    break;
  case "Pepsi":
    text = "Pepsi is my favorite too!";
    break;
  case "Sprite":
    text = "Really? Are you sure the Sprite is your favorite?";
    break;
  default:
    text = "I have never heard of that one!"; }
    // while
let contador3 = 0;
while (contador3 <= 5) {
contador1++;
}
// 6
console.log(contador3);
// do-while
let contador4 = 0;
do {
contador2++;
} while (contador4 <= 5);
// 6
console.log(contador4);