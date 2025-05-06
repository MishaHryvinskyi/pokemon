import Form from "./Components/Form/Form"

function App() {
  const handleData = pokemon => {
    console.log(pokemon)
  }

  return (
    <>
     <Form handleData={handleData}/>
    </>
  )
}

export default App
