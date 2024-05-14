//import logo from './logo.svg';
import './App.css';
import { soma } from './js/Soma';
import Clock from './js/classeeSeuMetodo';
import { welcome } from './js/welcome';
/*import { hello } from './js/hello';

import tick from './js/tick';
import ReactDOM from 'react-dom/client';
import React from 'react';*/


function App() {
  var somaVariavel = soma(12,3)

  return (
    Clock,
    welcome,//ESSA PARTE AINDA NÃO FUNCIONA COMPLETAMENTE
    <div>
    <h1>Hello ReactJs</h1>
    <p>{somaVariavel}</p>,
    </div>
    //tick NÃO FUNCIONA COMPLETAMENTE
    
 )

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />         
        <p>
          Ok remove aqui CERTO
        </p>      
        </header>
    </div>
  );*/
}

export default App;
