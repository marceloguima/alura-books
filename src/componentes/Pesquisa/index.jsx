import "./style.css";

function Pesquisa() {
    return (
        <section className="pesquisar">
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <form className="campo-pesquisa">
                <input type="text" placeholder="O que vai ler hoje?" />
                <button>Buscar</button>
            </form>
        </section>
    );
}

export default Pesquisa;
