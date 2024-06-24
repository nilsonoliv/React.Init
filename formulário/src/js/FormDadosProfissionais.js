import { Component } from "react";



class FormDadosProfissionais extends Component{
    render() {
        return(
            
            <div className="dados-profissionais-container">
                <h2>Dados Profissionais</h2>

                <div className="radio-cargo">
                    <h4 className="titulo-radio">Natureza do Cargo</h4>
                    <span className="radio-container">
                        <input id="campo-radio1" type="radio" name="radio-cargo" checked></input>
                        <label form="campo-radio1">Gerência</label>
                        
                        <input id="campo-radio1" type="radio" name="radio-cargo" ></input>
                        <label form="campo-radio1">Financeiro</label>

                        <input id="campo-radio1" type="radio" name="radio-cargo" ></input>
                        <label form="campo-radio1">Recepção</label>

                        <input id="campo-radio1" type="radio" name="radio-cargo" ></input>
                        <label form="campo-radio1">Administrativo</label>

                        <input id="campo-radio1" type="radio" name="radio-cargo" ></input>
                        <label form="campo-radio1">Jurídico</label>

                    </span>

                </div>

                <div>
                    <h4>Área de interesse</h4>

                </div>

        
            </div>
    
        );
    }

}

export default FormDadosProfissionais;