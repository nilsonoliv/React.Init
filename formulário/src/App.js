
import './App.css';
//import ReactDOM from 'react-dom/client';
import React from 'react';
import { FormDadosPessoais } from './js/FormDadosPessoais';


function App() {
  
  return (
    <div>
      <form>
        <h1 className='titulo-principal-formulario'>Formulário</h1>
        <FormDadosPessoais/>
        

      </form>

    </div>
        
 )

  
}

export default App;
