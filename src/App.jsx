import "./App.css";
import Header from "./componentes/Header";
import Pesquisa from "./componentes/Pesquisa";
import UltimosLancamentos from "./componentes/UltimosLancamentos"

function App() {
    return (
        <div className="app">
            <Header />
            <Pesquisa />
            <UltimosLancamentos/>
        </div>
    );
}

export default App;
