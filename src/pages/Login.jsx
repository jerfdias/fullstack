import { useState } from "react"
import"../pages/estilos/Login.css";
import { useNavigate } from "react-router";

function Login() {
  
  
  
const navigate=useNavigate();
const[email,setEmail]=useState("");  
const[senha,setSenha]=useState("");  
const[mensagem,setMensagem]=useState("");
  const[tipoMensagem,setTipoMensagem]=useState("");

async function LoginUsuario(e) {
    e.preventDefault();

  const resposta= await fetch("https://full-stack-deploy-kwms.onrender.com/usuarios",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email,
        senha
    })
  });

  if(resposta.ok){
    setTipoMensagem("sucesso");
    setEmail("");
        setSenha("");
        setTimeout(()=>{
            navigate("/")
        }, 2000);
    
  }else{
    setTipoMensagem("erro");
  }

  const dados=await resposta.json();
  setMensagem(dados.mensagem);
  
}
  
  
  
    return (
    <div>


   <h1 className="titulo">Tela de login</h1>
   <form onSubmit={LoginUsuario} className="formulario">
   <input 
   type="email"
   placeholder="digite seu email"
   value={email}
   onChange={(e)=>setEmail(e.target.value)}/>


   <input type="password"
   placeholder="digite sua senha"
   value={senha}
   onChange={(e)=>setSenha(e.target.value)}/>
   <button type="submit">Login</button>
   <span className={tipoMensagem}>{mensagem}</span>


   </form>


    </div>
  )
}

export default Login