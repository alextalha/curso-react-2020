import  React  from 'react';


 function App(props){


  const modificarNome = event => {
    console.log(event.target.value)
  }

  const criarCombo = () => {
    let dados = ['dados 1','dados 2']
    let ComboOptions = dados.map( (item) => <option>{item}</option>)
    return (
      <select>
        {ComboOptions}
      </select>
    )
  }


      const MeuComboBox = () => criarCombo()

    return ( 
      <React.Fragment>
        <input type="text" value={props.nome} onChange={modificarNome} />

        <h1>Hello {props.nome}</h1>
        <h1>Idade {props.idade}</h1>
        <MeuComboBox />
      </React.Fragment>
    )
}

export default App;
