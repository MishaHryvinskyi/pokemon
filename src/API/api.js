const URL = 'https://pokeapi.co/api/v2';

export const getPokemon = (serchName) => {
    return fetch(`${URL}/pokemon/${serchName}`).then(response => {
        if(response.ok) {
            return response.json();
        }
        return Promise.reject(
            new Error(`Покемона з ім'ям? ${serchName} не знайдено`)
        )
    })
};