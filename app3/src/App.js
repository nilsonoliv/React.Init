import './App.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {clickButton} from './actions'

/*O codigo do curso esta desatualizado*/

 class App extends Component() {
  state = {
    inputValue: ''
  }
  inputChange = event =>{
    this.setState({
      inputValue: event.target.value 
    })
  }

  render(){
    const {
      clickButton,
      newValue
    } = this.props; //constante local chamada "newValue" (novo valor), que irá receber os dados de Props que serão mapeados com os dados da Store.
    
    const {inputValue} = this.state;

    return(
    <div className="App" style={{ paddingTop: '10px' }}>     
    <h2>App3: React com Redux</h2> 
    <input type='text' onChange={this.inputChange} value={inputValue}/> 
    <button onClick={() => clickButton(inputValue)}>Enviar</button> 
    <h3>{newValue}</h3> 
    </div> 
    )
  }
  
}
const mapStateToProps = store => ({       //. O método mapStateToProps transforma um trecho 
  newValue: store.clickState.newValue     //do estado da Store em uma prop utilizável pelo componente, com o nome newValue.
});
const mapDispatchToProps = Dispatch =>
  bindActionCreators({clickButton }, Dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (App);
/*Realizamos, ao mesmo tempo, a exportação da aplicação (componente "App"), 
agora recebida como parâmetro da função "connect", que também recebe como parâmetro o mapeamento da Store.*/

//OBJETIVO DO CÓDIGO
/*Pronto! Se você seguiu esses passos corretamente, ao digitar um texto e acionar o botão, o valor do input será direcionado para 
o componente "h3" e exibido logo abaixo, conforme imagem a seguir.*/