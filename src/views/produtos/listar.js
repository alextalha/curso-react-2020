import React, { Component, Fragment }  from 'react'

export default class ListarProduto extends React.Component {

    constructor(){
        super()
        //this.service = new ProdutoService()
      

    }

    render(){

      return(
      <>
       <div class="card border-danger mb-3 mb-3">
            <div class="card-header">Listar Produto</div>
            <div class="card-body">
                <h4 class="card-title"></h4>
                <p class="card-text">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Produto</td>
                                <td>Sku</td>
                                <td>Preço</td>
                                <td>Fornecedor</td>
                            
                            </tr>
                        </thead>
                        <tbody>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                        </tbody>
                </table>
                </p>
            </div>
        </div>
    </>
    )
    }
}