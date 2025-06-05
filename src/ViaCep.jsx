import './ViaCep.css'
const ViaCep = () => {
    return (
        <div className="ViaCep">
        <h3>Endereço do cliente</h3>
        <input type={"text"} title="CEP"
        id={"cep"} className={"cep"}
        name={"cep"} placeholder="00000000" />

        <input type={"button"}
         title="Buscar"
         value={"Buscar"}
        id={"botao"}
        className={"botao"}
        name={"botao"} />

        </div>
    )
}

export default ViaCep