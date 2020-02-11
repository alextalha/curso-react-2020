import  React  from 'react';


class App extends React.Component{

  state = {
    nome : ""
  }

  constructor(){
    super()

    //this.modificarNome = this.modificarNome.bind(this)
  }

  modificarNome = (event) => {
      let nome = event.target.value;
      this.setState({
        nome: nome
      })
  }

  criarCombo = () => {
    let dados = ['dados 1','dados 2']
    let ComboOptions = dados.map( (item) => <option>{item}</option>)
    return (
      <select>
        {ComboOptions}
      </select>
    )
  }

  componentDidMount(){
    console.log('Executou o componentDidMount')
  }

    render(){
      console.log("Executou o Render")
      const MeuComboBox = () => this.criarCombo()
    return ( 
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.state.nome}</h1>
        <h1>Hello {this.props.nome}</h1>
        <h1>Idade {this.props.idade}</h1>
        <MeuComboBox />
      </React.Fragment>
    )
}
}

export default App;
