4.3 >= 4 //true
1 == 2   // false
4 < 4    //false
2 !== 5  //true
5 == '5' // true
5 === '5'// false
5 == 5   // true
5 === 5  // true


const a=2
const b=4
const c=6
const d=3

if ((a+b)>(c+d)){
console.log(`a+b (${a+b}) es mayor que c+d (${c+d})`)
}

if ((a+b)>(c+d)) {
    document.write('a+b es mayor que c+d')
    
}
else {
 document.write('a+b no es mayor que c+d')   
}


// 2 franjas horarias de (9-14) sant boi (15-20) viladecans. 4 valores en los que digan si estoy en la franja horaria o no.

const f=10
const g=18
const h=21
const j=8

if ((h>=9)&&(h<=14)) { 'sant boi';document.write('sant boi')
    } else if ((h>=15)&&(h<=20)) {'viladecans';document.write('viladecans')

} else { 'no esta en horario lectivo'; document.write('horario no lectivo')
    
}

// ejercicio 3

const a1=33
const a2=50
const a3=15

if ((a1+a2+a3)==180) {'si que suman 180';document.write('si que suman 180')
    
} else {'no suman 180';document.write('no suman 180')
    
}
// ejercicio 4
const c1=1
const c2=2
const c3=3
const c4=4
if (c1%2==0){'es un numero par';document.write('es par')
    
} else {' no es un numero para. es impar'; document.write('es impar')
    
}

//ejercicio 5

let x=1,y=2,z=3

if (x>=y) {'muestra el numero mas grande';document.write('x es el mayor')    
} else if (x>=z) {'muestra el numero mas grande';document.write('x es la mayor')
}
else if (y>=z) {'muestra el numero mas grande';document.write('y es la mayor')
}
 else  {'muestra el numero mas grande'; document.write('z es la mayor')
}

//ejercicio 6
