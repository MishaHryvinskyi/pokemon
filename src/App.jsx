import { useEffect, useState } from "react"
import Form from "./Components/Form/Form"
import List from "./Components/List/List";

import { getPokemon } from "./API/api";
import { Container } from "./Components/Container.styled";

function App() {
  const [item, setItem] = useState('');
  const [pok, setPok] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!item) return;
    setLoading(true);
    getPokemon(item)
    .then(data => setPok(data))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  },  
  [item]);

  const handleData = text => {
    setItem(text)
  }

  return (
    <Container>
     <Form handleData={handleData}/>
     <List pokemon={pok} loading={loading}/>
    </Container>
  )
}

export default App
