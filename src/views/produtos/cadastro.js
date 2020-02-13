import React from 'react'


class CadastroProduto extends React.Component {

    render(){
        return (
        <div className="card border-secondary mb-3">
             <div className="card-header">Cadastro de Produto</div>
            <div className="card-body">

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="nome"  > Nome </label>
                            <input type="text" placeholder="Digite um nome" class="form-control" id="nome"></input>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="nome"  > Sku </label>
                            <input type="text" placeholder="Digite um Sku" class="form-control" id="sku"></input>
                        </div>
                    </div>
                
                </div>

                <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                        <label for="descricao">Descrição</label>
                        <input type="text-area" class="form-control"></input>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CadastroProduto;

