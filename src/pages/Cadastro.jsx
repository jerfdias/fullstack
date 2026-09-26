import { useState } from "react"
import "../pages/estilos/Cadastro.css";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillKeyFill } from "react-icons/bs";
import { useNavigate } from "react-router";
function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const[mensagem,setMensagem]=useState("");
    const[tipoMensagem,setTipoMensagem]=useState("");
    const navigate= useNavigate();
    async function EnviarFormulario(e) {
        e.preventDefault();

        const resposta = await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                senha
            })
        });

        const dados = await resposta.json();
        if(resposta.ok){
            setTipoMensagem("sucesso")
            setNome("");
            setEmail("");
            setSenha("");
            setTimeout(()=>{
                navigate("/login");
            },2000);

            
        }else {
            setTipoMensagem("erro")
        }
        console.log(dados);
        setMensagem(dados.mensagem);
    }

    



return (
    <div>
        <h1 className="titulo">Tela de cadastro</h1>

        <form className="formulario" onSubmit={EnviarFormulario}>

            <input
                type="text"
                placeholder="Digite seu nome aqui"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <BsFillEnvelopeFill className="iconEmail"/>
            <input
                type="text"
                placeholder="digite seu email aqui"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

           <BsFillKeyFill className="iconSenha"/>
            <input
                type="password"
                value={senha}
                placeholder="digite uma senha"
                onChange={(e) => setSenha(e.target.value)} />
            <button type="submit"className="btn">Cadastrar</button>


            <span className={tipoMensagem}>{mensagem}</span>

        </form>



    </div>
)

}
export default Cadastro