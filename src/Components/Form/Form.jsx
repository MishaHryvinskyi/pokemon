import { useState } from "react";
import { FormContainer } from './Form.styled'
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Form = ({ handleData }) => {
    const [pokemonName, setPokemonName] = useState('');

    const handlePokemon = e => {
        setPokemonName(e.target.value);
    }

    const handlerSubmit = e => {
        e.preventDefault();
        if(!pokemonName) {
            toast.error("Введіть імя покемона!")
        } 
        handleData(pokemonName)
        setPokemonName('')
    }

    return (
        <FormContainer onSubmit={handlerSubmit}>
            <input 
                name="pokemon"
                type="text" 
                onChange={handlePokemon} 
                value={pokemonName}
                placeholder="введіть ім'я покемона"
            />
            <button type="submit">
                <FaSearch />
            </button>
            <ToastContainer />
        </FormContainer>
    )
}

export default Form;