import { useState } from 'react'


function App() {
  
  const [numeros, setNumeros] = useState([]) 

  function handleClick() {
    setNumeros([...numeros, numeros.length])
  }

  return (
    <div className="App">
      <ul> 
        {numeros.map((numeros, index) => 
        <li key={index}>O item {numeros} foi adicionado à lsita!</li>)}
      </ul>

      <button onClick={handleClick}>Clique</button>
    </div>
  )
}

export default App
