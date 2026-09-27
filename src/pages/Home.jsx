import { useEffect, useState } from "react";
import "./estilos/Home.css";

function Home() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        async function buscarUsuarios() {

            try {

                const resposta = await fetch(
                    "https://full-stack-deploy-kwms.onrender.com/usuarios"
                );

                const dados = await resposta.json();

                setUsuarios(dados);

            } catch (error) {

                console.error("Erro ao buscar usuários:", error);

            }
        }

        buscarUsuarios();

    }, []);

    return (

        <div className="dashboard">

            {/* MENU LATERAL */}

            <aside className="sidebar">

                <h2>Meu Sistema</h2>

                <nav>

                    <a href="/home">🏠 Home</a>

                    <a href="/usuarios">👤 Usuários</a>

                    <a href="/cadastro">➕ Cadastro</a>

                    <a href="/relatorios">📊 Relatórios</a>

                    <a href="/exportar">📄 Exportar Excel</a>

                </nav>

            </aside>


            {/* CONTEÚDO */}

            <main className="conteudo">

                <header className="topo">

                    <input
                        type="text"
                        placeholder="Pesquisar usuários..."
                    />

                    <div>
                        👤 Jefferson
                    </div>

                </header>


                <section className="boasVindas">

                    <h1>Olá, Jefferson!</h1>

                    <p>
                        Bem-vindo ao seu painel de controle.
                    </p>

                </section>


                {/* CARDS */}

                <section className="cards">

                    <div className="card">

                        <h3>👥 Usuários cadastrados</h3>

                        <strong>
                            {usuarios.length}
                        </strong>

                    </div>


                    <div className="card">

                        <h3>🟢 Usuários ativos</h3>

                        <strong>
                            {usuarios.length}
                        </strong>

                    </div>


                    <div className="card">

                        <h3>➕ Novos usuários</h3>

                        <strong>
                            {usuarios.length}
                        </strong>

                    </div>


                    <div className="card">

                        <h3>🚫 Usuários bloqueados</h3>

                        <strong>0</strong>

                    </div>

                </section>


                {/* ÚLTIMOS USUÁRIOS */}

                <section className="usuarios">

                    <div className="tituloUsuarios">

                        <h2>
                            Lista de usuários ({usuarios.length})
                        </h2>

                        <button>
                            + Novo usuário
                        </button>

                    </div>


                    <div className="tabelaContainer">

                        <table>

                            <thead>

                                <tr>

                                    <th>ID</th>

                                    <th>Nome</th>

                                    <th>E-mail</th>

                                    <th>Ações</th>

                                </tr>

                            </thead>


                            <tbody>

                                {usuarios.map((usuario) => (

                                    <tr key={usuario._id}>

                                        <td>
                                            {usuario._id}
                                        </td>

                                        <td>
                                            {usuario.nome}
                                        </td>

                                        <td>
                                            {usuario.email}
                                        </td>

                                        <td>

                                            <button>
                                                ✏️
                                            </button>

                                            <button>
                                                🗑️
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default Home;