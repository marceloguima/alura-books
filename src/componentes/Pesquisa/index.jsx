import "./style.css";
import BarraPesquisa from "../../componentes/BarraPesquisa"

function Pesquisa() {
    return (
        <section className="titleSection">
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <BarraPesquisa />
        </section>
    );
}

export default Pesquisa;
