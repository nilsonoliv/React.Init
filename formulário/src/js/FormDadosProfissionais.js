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
                    <input type="checkbox" id="computacao" name="area-interesse" value="computacao"></input>
                    <label for="computacao">Computação</label>

                    <input type="checkbox" id="biologia" name="area-interesse" value="biologia"></input>
                    <label for="biologia">Biologia</label>

                    <input type="checkbox" id="meioambiente" name="area-interesse" value="meioambiente"></input>
                    <label for="meioambiente">Meio Ambiente</label>

                    <input type="checkbox" id="engenharia" name="area-interesse" value="engenharia" ></input>
                    <label for="engenharia">Engenharia</label>

                    <input type="checkbox" id="historia" name="area-interesse"  value="historia" ></input>
                    <label for="historia">Histórita</label>
                </div>

                <div className="">
                    <label for="minicurriculo">Mini currículo</label>
                    <textarea id="minicurriculo" rows="20" cols="8" ></textarea>
                </div>

        
            </div>
    
        );
    }

}

export default FormDadosProfissionais;