const somethingWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve ('Hey!')
        } else {
            reject('Whooops!');
        }
    })
}
// return new Promise es la sintaxis para crear una nueva promesa. Estas tiene dos argumentos, uno en caso de que la promesa se cumpla y otro en caso de que la promesa sea rechazada 
// después de crear la promesa creamos una validación que me va a permitir definir en que condiciones va a resolver (resolve -> if true), en dado caso de que no se cumpla tendremos un else con un reject. y en que condiciones va a rechazar (if = resolve)
somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))
// Para ejecutarla llamamos a la función, se debe tener en cuenta dos elementos que las promesas tienen encadenados catch y then, que nos implican que recibimos una respuesta y con ellos hacemos algo.
// Y en dado caso de que la promesa pase por el reject pasamos por el catch que recibirá un error.


const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve('True')
            },2000)
        } else {
            const error = new Error ('Whooop!');
            reject(error)
        }
    })
}
// En la ejecución de las promesas podemos ejecutar más then, para permitirnos realizar encademanientos de acciones, por ejemplo el console.log con el hola
// La creación de un new Error en las promsesas nos permite hacer un mejor debbuging que nuestro programa pues no se limita a indicarnos el mensaje de reject, sino que nos da todos los detalles del error, por ejemplo que hay una promesa que se está ejectuando, las líneas en las cuales se está ejecutando, etc.
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error));
// Catch nos permite saber como vamos a manejar el error. 

// Para correr varias promesas a la vez, o promesas encadenadas vamos a usar un método conocido como promise.all
// Promise.all(argumento) recibe como argumento las promesas que queremos que se ejecuten

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log ('Array of results', response);
    })
    .catch(err =>{ 
        console.error(err);
    })





