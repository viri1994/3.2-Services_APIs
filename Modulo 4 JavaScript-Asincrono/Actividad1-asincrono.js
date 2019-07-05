//Ejemplo 
/*let foo = (valor) => console.log(valor);
let array = ['a', 'b', 'c']

array.forEach(foo);// Esto es un callback
setTimeout(foo, 3000);*/
//------------------------------------------
/*let foo = () => console.log('in callback!');
setTimeout(foo, 3000) */

/*Recorre un arreglo usando un callback, imprime cada elemento

Haz varios callbacks de forma que se imprima:
1 después de 3 segundos
2 después de 1 segundo
3 después de 4 segundos
En consola debería verse 2 1 3*/
    /*setTimeout(()=> console.log(2),1000);
    setTimeout(()=> console.log(1),2000);
    setTimeout(()=> console.log(3),3000);*/

//Escribe un callback que recibe un argumento y lo imprime
/*function arg(palabra){
    console.log(2)
    console.log(palabra);
    console.log(3)
}
//funcion que recibe el call back anterior y lo ejecuta
function gets(callback){
    console.log(1)
    callback('Recibiendo')
}

gets(arg)
*/
//Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Después debe llamar a un tercer callback con el valor que regresa el segundo*/

/*function first (){
    callback('first');

}
function second (value, callback){
    callback(`second, ${value}`);
    
}
function third (firstValue, secondValue, callback){
    callback(`third, (${secondValue}), ${firstValue}`);
    
}

first(firstValue =>{
    second(firstValue, secondValue => {
        third(firstValue, secondValue, thirdValue => {
            console.log(thirdValue);
        });
    });
});

*/


//Promises
//Convierte todos los ejercicios de la parte 1 a usar Promises
/*Promise.resolve('first').then(firstValue => {
    Promise.resolve(`second, ${firstValue}`).then(secondValue => {
        Promise.resolve(`third, (${secondValue}), ${firstValue}`).then(console.log);
    })
})

//async await
const asyncHell = async () => {
    const firstValue= await Promise.resolve('first');
    const secondValue = await Promise.resolve(`second, ${firstValue}`);
    const thirdValue = await Promise.resolve(`third, (${secondValue}), ${firstValue}`);
    console.log(thirdValue);
}
asyncHell();*/
//Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)

a1= new Promise((resolve, reject)=>setTimeout(resolve,1000, 1))
a2= new Promise((resolve, reject)=>setTimeout(resolve,2000, 2))
a3= new Promise((resolve, reject)=>setTimeout(resolve,3000, 3))
e=Promise.reject('no!');

Promise.resolve(1).then(v=>console.log(v));

console.log(Promise.all([a2, a1, e, a3]));
//Agrega un catch al ejercicio anterior





//Agrega un finally al ejercicio anterior


//Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina
//Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben
//Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch
//Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch

