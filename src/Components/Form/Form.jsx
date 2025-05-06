import { useState } from "react";
import { FormContainer } from './Form.styled'
import { FaSearch } from "react-icons/fa";

const Form = ({ handleData }) => {
    const [pokemon, setPokemon] = useState('');

    const handlePokemon = e => {
       setPokemon(e.target.value);
    }

    const handlerSubmit = e => {
        e.preventDefault();
        handleData(pokemon)
        setPokemon('')
    }

    return (
        <FormContainer onSubmit={handlerSubmit}>
            <input 
                name="pokemon"
                type="text" 
                onChange={handlePokemon} 
                value={pokemon}
                placeholder="введіть ім'я покемона"
            />
            <button type="submit">
                <FaSearch />
            </button>
        </FormContainer>
    )
}

export default Form;