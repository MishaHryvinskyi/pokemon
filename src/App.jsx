import {  useState } from "react"
import Form from "./Components/Form/Form"
import Pokemon from "./Components/Pokemon/Pokemon";
import { Container } from "./Components/Container.styled";

function App() {
  const [pokemon, setPokemon] = useState(null);

  const handleData = text => {
    setPokemon(text)
  }

  return (
    <Container>
     <Form handleData={handleData}/>
     <Pokemon pokemonName={pokemon}/>
    </Container>
  )
}

export default App
