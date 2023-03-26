import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams, useLocation, Navigate } from "react-router-dom";
import '../index.css'



export default function EditarPage() {


    const navigate = useNavigate();
    const { alunoID } = useParams();
    const location = useLocation();
    const alunoIg = alunoID.substring(1);
    const alunoId = alunoIg.substring(0, alunoIg.length - 1);


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
            const response = await axios.get(`https://api-aluno.vercel.app/aluno/${alunoId}`)
            setNome(response.data.nome);
            setMatricula(response.data.matricula);
            setCurso(response.data.curso);
            setBimestre(response.data.bimestre);
            setId(response.data._id)
            console.log(response.data)

        } catch (error) {
            alert("Erro ao buscar alunos ")
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






    async function editAluno(event) {
        event.preventDefault();

        try {
            await axios.put(`https://api-aluno.vercel.app/aluno/${id}`, {
                nome: nome,
                matricula: matricula,
                curso: curso,
                bimestre: bimestre,
            });
            limparCampos();
            alert("Aluno editado com sucesso")
            navigate("/")

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