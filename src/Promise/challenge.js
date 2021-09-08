const fetchData = require('../utils/fetchData');
let API = 'https://rickandmortyapi.com/api/character/';

// Petición una es el count de la cantidad de personajes que hay
// Segunda petición es el llamado al elemento -> nombre
// De la petición anterior (nombre) vamos a pedir la dirección a la que pertenece el personaje

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData (`${API}${data.results[0].id}`);
    })
    .then (data => {
        console.log(data.name)
        return fetchData (data.origin.url)
    })
    .then (data => {
        console.log(data.dimension)
    })
    .catch (err => console.error(err))