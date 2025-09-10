import logo from '../../images/logo.svg'
import './style.css'


function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logo do tecnobooks"></img>
            <p translate='no'>
                <strong >Tecno</strong> Books
            </p>
        </div>
    );
}

export default Logo;