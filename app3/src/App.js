import './App.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
/*O codigo do curso esta desatualizado*/

 class App extends Component() {
  render(){
    const {newValue} = this.props; //constante local chamada "newValue" (novo valor), que irá receber os dados de Props que serão mapeados com os dados da Store.
    return(
    <div className="App" style={{ paddingTop: '10px' }}>     
    <h2>App3: React com Redux</h2> 
    <input type='text' /> 
    <button>Enviar</button> 
    <h3>{newValue}</h3> 
    </div> 
    )
  }
  
}
const mapStateToProps = store => ({       //. O método mapStateToProps transforma um trecho 
  newValue: store.clickState.newValue     //do estado da Store em uma prop utilizável pelo componente, com o nome newValue.
});

export default connect(mapStateToProps) (App);
/*Realizamos, ao mesmo tempo, a exportação da aplicação (componente "App"), 
agora recebida como parâmetro da função "connect", que também recebe como parâmetro o mapeamento da Store.*/