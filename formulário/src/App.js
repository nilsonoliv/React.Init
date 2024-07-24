
import './App.css';
//import ReactDOM from 'react-dom/client';
import React from 'react';
import { FormDadosPessoais } from './js/FormDadosPessoais';
import FormDadosProfissionais from './js/FormDadosProfissionais';



function App() {
  
  return (
    <div>
      <form>
        <h1 className='titulo-principal-formulario'>Formulário</h1>
        <FormDadosPessoais/>
        <FormDadosProfissionais/>
        

      </form>

    </div>
        
 )

  
}

export default App;
