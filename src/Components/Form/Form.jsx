import { useState } from "react";

const Form = ({ handleData }) => {
    const [pokemon, setPokemon] = useState('');

    const handlerPokemon = e => {
       const pokemon =  setPokemon(e.target.value);

    }

    return (
        <form>
            <label>
                <input type="text" onChange={handlerPokemon} value={pokemon}/>
            </label>
            <button type="submit">Шукати</button>
        </form>
    )
}

export default Form;