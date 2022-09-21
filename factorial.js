const dato = 10; // Número del que queremos calcular el factorial
let r = 1;
for(let i = dato; i>0; i--){
    r *= i;console.log(r)
}
console.log(r)



let dato2 = 10; // Número del que queremos calcular el factorial
let r1 = 1;
while(dato2 > 0){
    r1 *= dato;
    console.log(r)
    dato--;
}
console.log(r)

const dato3 = 10; // Número del que queremos calcular el factorial
let r3 = 1;
for(let i = dato; i>0; i--){
    r3 *= i;console.log(r)

    if (r3 === 151200) {
        continue;
        
    }
    if (r3 === 3628800) {
        break;
    }

}
console.log(r)

