import Logo from "../../componentes/Logo";
import OpcoesHeader from "../../componentes/OpcoesHeader";
import "./style.css"

function Header() {
    return (
        <header className="App-header">
            <Logo />
            <OpcoesHeader/>
        </header>
    );
}

export default Header;
