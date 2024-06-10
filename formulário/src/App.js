
import './App.css';
//import ReactDOM from 'react-dom/client';
import React from 'react';


function App() {
  
  return (
    <div>
      <form>
        <h1 className='titulo-principal-formulario'>Formulário</h1>

        <div className='dados-pessoais-container'>
          <h2>Dados Pessoais</h2>
          <label for='form-nome' >Nome</label> 
          <input id='form-nome' type='text' name='form-nome' required></input>
          <label for='form-end' >Endereço</label>
          <input id='form-end' type='text' name='form-end'></input>
          <label for='form-cidade' >Cidade</label>
          <input id='form-cidade' type='text' name='form-cidade'></input>
          <label for='form-estado' >Estado</label>
          <input id='form-estado' type='text' name='form-estado'></input>
        </div>

      </form>

    </div>
        
 )

  
}

export default App;
