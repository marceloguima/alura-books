import "./style.css";

function Input({
    id,
    textoPlaceholder,
    tipo = "text",
    value,
    onChange,
    onBlur,
}) {
    return (
        <div>
            <input
                className="campo-pesquisa"
                id={id}
                placeholder={textoPlaceholder}
                type={tipo}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
