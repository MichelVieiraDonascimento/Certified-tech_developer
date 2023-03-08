import { useState } from 'react'



function App() {
  const [userNameInput, setUserNameInput] = useState("");
  const [userIdadeInput, setUserIdadeInput] = useState("");
  const [userPokemonInput, setUserPokemonInput] = useState("")

  const [listaDeUsuarios, setListaDeUsuarios] = useState ([]);


  function addUsuarioList(){
    const newUser = {
      name: userNameInput,
      idade: userIdadeInput,
      pokemon: userPokemonInput,
    };

    setListaDeUsuarios([...listaDeUsuarios, newUser]);
    setUserNameInput("");
    setUserIdadeInput("");
    setUserPokemonInput("");
  }

  return (
    <div>
      <form>
        <input
          value={userNameInput}
          placeholder="Nome Completo"
          onChange={(event) => setUserNameInput(event.target.value)}
        />

        <input
          value={userIdadeInput}
          placeholder="Idade"
          onChange={(event) => setUserIdadeInput(event.target.value)}
        />
        <br />
        <br />

        <input
          value={userPokemonInput}
          placeholder="Pokemon Favorito"
          onChange={(event) => setUserPokemonInput(event.target.value)}
        />
        <br />
        <br />
        <input type="button" onClick={addUsuarioList} value = "Add" />

       

      </form> 
      <ul>
          {listaDeUsuarios.map((item, index) => (
            <li key={index}>
              Nome: {item.name} - Idade: {item.idade}
              <br />
              Pokemon Favorito: {item.pokemon}
              <br />
              <br />
            </li>
          ))}
        </ul>
        

    </div>
  )
}

export default App
