import "./style.css";
import { livros } from "./dadosUltimosLancamentos";
import Titulo from "../Titulo";

function UltimosLancamentos() {
    return (
        <section className="content-ultimos-lancamentos">
            <div className="title">
            <Titulo titulo="Útimos Lançamentos "/>
            </div>

            <div className="cards">
                {livros.map(livros => (
            <div className="card">
                    <img src={livros.src} />
                <p>{livros.nome}</p>
            </div>
                ))}
            </div>

           
        </section>
    );
}
export default UltimosLancamentos;
