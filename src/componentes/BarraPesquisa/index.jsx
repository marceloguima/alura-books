import "./style.css"




function BarraPesquisa(){
    return(
           <form className="campo-pesquisa">
                <input type="text" placeholder="O que vai ler hoje?" />
                <button>Buscar</button>
            </form>
    )
}

export default BarraPesquisa