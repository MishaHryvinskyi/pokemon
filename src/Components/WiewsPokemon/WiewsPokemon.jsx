import { PocemonContainer, PokemonTitle, ImgPokemon } from "./WiewsPokemon.styled";

const WiewsPokemon = ({ pokemonItem }) => {
    // const { name, sprites } = pokemonItem;
    return (
    <PocemonContainer>
        {console.log(pokemonItem)}
        <PokemonTitle>{pokemonItem.name}</PokemonTitle>
        <ImgPokemon 
            src={pokemonItem.sprites.other['official-artwork'].front_default}
            alt={pokemonItem.name}
            width='300'
        />
        <p>Товщина: {pokemonItem.weight}</p>
        <p>Висота: {pokemonItem.height}</p>
    </PocemonContainer>
    )
}

export default WiewsPokemon;