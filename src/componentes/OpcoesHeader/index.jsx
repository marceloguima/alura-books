import "./style.css"
import Icones from "../../componentes/Icones"

const textoOpcoes = ["CATEGORIAS","FAVORITOS", "MINHA ESTANTE"]

function OpcoesHeader (){
    return(
        <div className="container-opcoes">
        <ul className="opcoes">
        {textoOpcoes.map((texto) =>(
            <li className="opcao"><p>{texto}</p></li>
        ))}
        </ul>
        <Icones/>
    
        </div>
    )
}

export default OpcoesHeader