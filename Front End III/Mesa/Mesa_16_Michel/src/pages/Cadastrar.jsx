import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../index.css'

export default function CadastrarPage(){


    const navigate = useNavigate();
    



 

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
            navigate("/")
        } catch (error) {
            alert("Erro ao tentar cadastrar aluno!!");

        }
    }



    return (
        <div className="App">
            <div className='containerForm'>
                <div className="edit">
                    <h2>{`${id ? "Editar" : "Cadastrar"} aluno`}</h2>
                    <br />
                    <br />
                    <form onSubmit={id ? editAluno : addAluno} >
                        <input
                            placeholder='Informe o nome do aluno'
                            type="text"
                            value={nome}
                            onChange={(event) => setNome(event.target.value || "")}
                        />
                        <br />
                        <br />
                        <input
                            placeholder='Informe a matricula'
                            type="text"
                            value={matricula}
                            onChange={(event) => setMatricula(event.target.value || "")}
                        />
                        <br />
                        <br />
                        <input
                            placeholder='Informe qual o seu curso'
                            type="text"
                            value={curso}
                            onChange={(event) => setCurso(event.target.value || "")}
                        />
                        <br />
                        <br />
                        <input
                            placeholder='Informe qual o bimestre'
                            type="text"
                            value={bimestre}
                            onChange={(event) => setBimestre(event.target.value || "")}
                        />
                        <br />
                        <br />
                        <input type="submit" />
                    </form>
                </div>

            </div>


        </div>
    )
}