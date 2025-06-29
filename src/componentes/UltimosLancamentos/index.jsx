import "./style.css";
import { livros } from "./dadosUltimosLancamentos";

function UltimosLancamentos() {
    return (
        <section className="content-ultimos-lancamentos">
            <div className="title">
            <h2>Ultimos lançamentos</h2>
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
