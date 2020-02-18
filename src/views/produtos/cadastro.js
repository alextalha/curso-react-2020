import React from 'react'


import ProdutoService from "../../app/produtoService"

const estadoInicial = {
    nome : "",
    sku : "",
    fornecedor: "",
    descricao: "",
    preco: 0,
    sucesso:false,
    errors:[]

}

class CadastroProduto extends React.Component {
 
    state = estadoInicial

    constructor(){
        super()
        this.service = new ProdutoService()
      

    }

    onSubmit = (event) =>{

        const produto = {
            nome : this.state.nome,
            sku: this.state.sku,
            descricao : this.state.descricao,
            preco: this.state.preco,
            fornecedor:this.state.fornecedor,

            }

        
        try {

            this.service.salvar(produto)
            this.onClear()
            this.setState({ sucesso : true })
            
        } catch (erro) {
                const errors = erro.erros
                this.setState({ errors })

        }

    }
    

    onClick = (event) => {
      
    }

    onChange = (event) =>{


        console.log(this.state.errors)
        const produto = {
            nome : this.state.nome,
            sku: this.state.sku,
            descricao : this.state.descricao,
            preco: this.state.preco,
            fornecedor:this.state.fornecedor
            }

        let nomeCampo = event.target.name;
        let valor = event.target.value;

       this.setState({ [nomeCampo] : valor })
       this.setState({ sucesso : false })
    }

    onClear = (event) => {
        this.setState(estadoInicial)
    }


    render(){
        return (
        <div className="card border-secondary mb-3">
             <div className="card-header">Cadastro de Produto</div>
            <div className="card-body">


                <div className="row">

                { this.state.sucesso && 
                        <div className="col-md-12">
                            <div className="alert alert-dismissible alert-success">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Parabéns!</strong> Cadastro Realizado com sucesso.
                            </div>
                        </div>
                    }


                    { this.state.errors.length > 0 && 
                        this.state.errors.map( msg => {
                            return(
                                <div className="col-md-12">
                                    <div className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                            <strong>Erro!</strong> {msg}}.
                                        </div>
                                    </div>
                            )
                            }) 
                    }
               
               
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
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button className="btn btn-success"  onClick={ this.onSubmit }> Salvar </button>
                            <button className="btn btn-danger"  onClick={ this.onClear }> Limpar </button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        )
    }
}

export default CadastroProduto;

