const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';
// la constante api es en mayusculas, es una convención que se utiliza cuando algo nunca se va a mover y nunca va a cambiar su nombre se establece como mayuscula 

// primera petición de la data general de la API
// personaje y su nombre
// origen de la dimensión donde se encuentra 
anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url)
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('before');
anotherFunction(API);
console.log('after')


