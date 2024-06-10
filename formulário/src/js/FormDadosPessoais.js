

export const FormDadosPessoais = () =>{

<div id='dados-pessoais' className='dados-pessoais-container'>

          <h2>Dados Pessoais</h2>

          <label for='form-nome' >Nome</label> 
          <input id='form-nome' type='text' name='form-nome' required></input>

          <label for='form-end' >Endereço</label>
          <input id='form-end' type='text' name='form-end'></input>

          <label for='form-cidade' >Cidade</label>
          <input id='form-cidade' type='text' name='form-cidade'></input>

          <label for='form-estado' >Estado</label>
          <select form='dados-pessoais' name='form-estado'>
            <option value={1}>Bahia</option>
            <option value={2}>Ceara</option>
            <option value={1}>Serjipe</option>
            <option value={1}>Pernambuco</option>
          </select>
        </div>
}

