import { useState } from "react";
import "./style.css";
import Input from "../Input";
import { livros } from "./dadosPesquisa";

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return (
        <section className="pesquisar">
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <Input
                textoPlaceholder="Escreva sua próxima leitura"
                onBlur={(evento) => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter((livro) =>
                        livro.nome.includes(textoDigitado)
                    );
                    setLivrosPesquisados(resultadoPesquisa);
                }}
            />
            {livrosPesquisados.map(livros =>(
                <div className="secao-pesquisados">
                    <div className="card">
                        <img src={livros.src} alt={"livro " + livros.nome} />
                        <p>{livros.nome}</p>
                    </div>
                </div>
                ))}
        </section>
    );
}

export default Pesquisa;
