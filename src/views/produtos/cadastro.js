import React from 'react'


class CadastroProduto extends React.Component {
 
  
    state = {
        nome : "",
        sku : "",
        fornecedor: "",
        descricao: "",
        preco: 0,

    }

    onSubmit = (event) => {
      console.log(this.state)
    }

    onChange = (event) =>{
        let nomeCampo = event.target.name;
        let valor = event.target.value;

       this.setState({ [nomeCampo] : valor })
    }


    render(){
        return (
        <div className="card border-secondary mb-3">
             <div className="card-header">Cadastro de Produto</div>
            <div className="card-body">

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Nome:*</label>
                            <input type="text" value={this.state.nome} onChange={ (event) => { this.onChange(event) } } placeholder="Digite um nome" className="form-control" name="nome"></input>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Sku:* </label>
                            <input type="text" value={this.state.sku} onChange={ (event) => { this.onChange(event) } } placeholder="Digite um Sku" className="form-control" name="sku"></input>
                        </div>
                    </div>
                
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <div className="form-group">
                        <label>Descrição:*</label>
                        <textarea value={this.state.descricao} onChange={ (event) => { this.onChange(event) } } name="descricao" className="form-control"/>
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Preço:* </label>
                            <input value={this.state.preco} onChange={ (event) => { this.onChange(event) } } type="text" placeholder="Digite o preço" className="form-control" name="preco"></input>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Fornecedor:* </label>
                            <input type="text" value={this.state.fornecedor} onChange={ (event) => { this.onChange(event) } } placeholder="Digite um Fornecedor" className="form-control" name="fornecedor"></input>
                        </div>
                    </div>
                
                </div>

                <div className="row">
                    <div className="col-md-1">
                        <button className="btn btn-success"  onClick={ this.onSubmit }> Salvar </button>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger"> Limpar </button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CadastroProduto;

