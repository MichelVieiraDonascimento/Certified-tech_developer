import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../index.css'

export default function HomePage() {

    const [alunos, setAlunos] = useState([]);



    const navigate = useNavigate();


    async function getAlunos() {

        try {
            const response = await axios.get("https://api-aluno.vercel.app/aluno")
            setAlunos(response.data)
            console.log(response.data)
        } catch (error) {
            alert("Erro ao buscar alunos")
        }

    };

    async function deleteAluno(id) {
        try {
            await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`)
            getAlunos();
            alert("Aluno deletado")
        } catch (error) {
            alert("Erro ao deletar aluno");

        }
    }




    useEffect(() => {
        getAlunos()
    }, []);

    return (
        <div className="containerAlunos">
            <h1>Alunos Cadastrados</h1>
            <button className="botaoCadastro" onClick={() => navigate(`/cadastrar`)} >Cadastrar novo aluno</button>
            <div className="todosAlunos">
                <ul>
                    {alunos.map((aluno) => (

                        <li key={aluno._id}>
                            <div className="alunos">
                                <div className="listaAlunos" >
                                    <h3>Aluno(a): {aluno.nome}</h3>
                                    <p>Matrícula: {aluno.matricula}</p>
                                    <p>Curso: {aluno.curso}</p>
                                    <p>Bimestre: {aluno.bimestre}</p>
                                </div>
                                <div className="botoesAluno">
                                    <button onClick={() => deleteAluno(aluno._id)} >Apagar</button>
                                    <button onClick={() => navigate(`/editar/${JSON.stringify(aluno._id)}`)} >Editar</button>
                                </div>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}