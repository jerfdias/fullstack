import {Routes, Route} from "react-router";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";



function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>


    </Routes>

);
}

export default App