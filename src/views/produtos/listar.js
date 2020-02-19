import React, { Component, Fragment }  from 'react'

import ProdutoService from "../../app/produtoService"

export default class ConsultaProduto extends React.Component {
    
    constructor(){
        super()
        this.service = new ProdutoService()   
        this.state = { produtos : [] }
    }

    async componentDidMount(){
        const produtos = this.service.listar()
      
         await  this.setState({ produtos } )

    }
    
    render(){
      
      return(
      <>
       <div className="card border-danger mb-3 mb-3">
            <div className="card-header">Consulta Produto</div>
            <div className="card-body">
                <h4 className="card-title"></h4>
       
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sku</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            
                            </tr>
                        </thead>
                        <tbody>
                              {

                                  this.state.produtos.map( (produto,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{produto.nome}</td>
                                            <td>{produto.sku}</td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.fornecedor}</td>
                                            <td></td>
                                        </tr>
                                    )
                                  })
                            
                            }
                   
                        </tbody>
                </table>
              
            </div>
        </div>
    </>
    )
    }
}