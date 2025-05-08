import { ClipLoader } from "react-spinners";
import { getPokemon } from "../../API/api";
import { useEffect, useState } from "react";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import WiewsPokemon from "../WiewsPokemon/WiewsPokemon";

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved'
};

const Pokemon = ({ pokemonName }) => {

    const [pokemonItem, setPokemonItem] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        if (!pokemonName) {
            return;
        }
    
        setStatus(Status.PENDING);
        getPokemon(pokemonName) 
            .then(pokemon => {
                setPokemonItem(pokemon);
                setStatus(Status.RESOLVED);
            })
            .catch(error => {
                setError(error);
                setStatus(Status.REJECTED);
            });
    }, [pokemonName]);
   
    if(status === Status.IDLE) {
        return <div>Введіть ім'я покемона</div>;
    }

    if(status === Status.PENDING) {
        return <ClipLoader/>
    }

    if(status === Status.REJECTED) {
        return <ErrorMessage error={error}/>;
    }

    if(status === Status.RESOLVED) {
        return <WiewsPokemon pokemonItem={pokemonItem}/>
    }
};

export default Pokemon;