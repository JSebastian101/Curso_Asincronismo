// Este nuevo enfoque nos permite implementar nuestro códgio las. Es preferible sobre las promesas porque hace que nuestro códgio se comporte como sincrono.
//  Esto no quiere decir que vaya a ser sincrona. si nuestra función es asíncrona siempre lo será. lo que hace async/await es pausar la ejecución del programa hasta que la promsea sea resulta dando el efecto de que es síncrona.
// Lo que hacemos con el async y wait es mandar la funcion a la cola de las WEB APIs, de modo que el código que contenga estas palabras se ejecutará únicamente cuando la pila de ejecución esté libre.

const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout (() => resolve('Do Something Async'), 3000)
        : reject (new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync
    console.log(something);
}

console.log('before');
doSomething();
console.log('After');
// Lo que hace async y await es muy similar al proceso de callback y promesas. En este caso, usamos el wait para indicarle al navegador que debe esperar a que la promesa se resuleva, y ese resultado guardarlo al interior de nuestra varaible 
// Para captar los errores lo haremos de la siguiente manera 
const anotherFunction = async () => {
    try {
        const somethig = await doSomethingAsync ();
        console.log(somethig)
    } catch (error) {
        console.error(error)
    }
}

console.log('before 1');
anotherFunction();
console.log('After 2');

