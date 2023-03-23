import { useState, useEffect } from 'react'
import axios from 'axios'
import "./index.css"

function App() {

  const [alunos, setAlunos] = useState([]);

  const [nome, setNome] = useState("")
  const [matricula, setMatricula] = useState("")
  const [curso, setCurso] = useState("")
  const [bimestre, setBimestre] = useState("")
  const [id, setId] = useState("")

  function limparCampos() {
    setNome("");
    setMatricula("");
    setCurso("");
    setBimestre("");
    setId("");
  }

  async function getAlunos() {

    try {
      const response = await axios.get("https://api-aluno.vercel.app/aluno")
      setAlunos(response.data)
      console.log(response.data)
    } catch (error) {
      alert("Erro ao buscar alunos")
    }

  };

  async function addAluno(event) {
    event.preventDefault();
    try {
      await axios.post("https://api-aluno.vercel.app/aluno", {
        nome: nome,
        matricula: matricula,
        curso: curso,
        bimestre: bimestre,
      });
      limparCampos();
      getAlunos();
    } catch (error) {
      alert("Erro ao tentar cadastrar aluno!!");

    }
  }

  async function deleteAluno(id){
    try {
      await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`)
      getAlunos();
      alert("Aluno deletado")
    } catch (error) {
      alert("Erro ao deletar aluno");
      
    }
  }


  function preencherForm(aluno) {
    setNome(aluno.nome);
    setMatricula(aluno.matricula);
    setCurso(aluno.curso);
    setBimestre(aluno.bimestre);
    setId(aluno._id);
  }

  async function editAluno(event){
    event.preventDefault();

    try {
      await axios.put(`https://api-aluno.vercel.app/aluno/${id}`, {
        nome: nome,
        matricula: matricula,
        curso: curso,
        bimestre: bimestre,
      });
      limparCampos();
      getAlunos();
      alert("Aluno editado com sucesso")
    } catch (error) {
      alert("Erro ao tentar editar aluno")
    }
  }




  useEffect(() => {
    getAlunos()
  }, []);

  return (
    <div className="App">
      <div className='containerForm'>

        <h2>{`${id? "Editar" : "Cadastrar"} aluno`}</h2>
        <br />
        <br />

        <form  onSubmit={id ? editAluno : addAluno} >
          <input
            placeholder='Informe o nome do aluno'
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

          <input
            placeholder='Informe a matricula'
            type="text"
            value={matricula}
            onChange={(event) => setMatricula(event.target.value)}
          />
          <br />
          <br />
          <input
            placeholder='Informe qual o seu curso'
            type="text"
            value={curso}
            onChange={(event) => setCurso(event.target.value)}
          />

          <input
            placeholder='Informe qual o bimestre'
            type="text"
            value={bimestre}
            onChange={(event) => setBimestre(event.target.value)}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>

      <div className="containerAlunos">
        <h1>Alunos Cadastrados</h1>
        <div className="todosAlunos">
        <ul>
          {alunos.map((aluno) => (
            <div className="alunos">
              <li key={aluno._id}>
                <h3>Aluno(a): {aluno.nome}</h3>
                <p>Matrícula: {aluno.matricula}</p>
                <p>Curso: {aluno.curso}</p>
                <p>Bimestre: {aluno.bimestre}</p>
                <button onClick={() => deleteAluno(aluno._id)} >Apagar</button>
                <button onClick={() => preencherForm(aluno)} >Editar</button>
              </li>
            </div>
          ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default App
