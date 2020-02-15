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
                            <label for="nome"  > Nome:* </label>
                            <input type="text" placeholder="Digite um nome" class="form-control" id="nome"></input>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="nome"  > Sku:* </label>
                            <input type="text" placeholder="Digite um Sku" class="form-control" id="sku"></input>
                        </div>
                    </div>
                
                </div>

                <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                        <label for="descricao">Descrição:*</label>
                        <textarea class="form-control"/>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="nome"  > Preço:* </label>
                            <input type="text" placeholder="Digite o preço" class="form-control" id="preço"></input>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="nome"  > Fornecedor:* </label>
                            <input type="text" placeholder="Digite um Fornecedor" class="form-control" id="fornecedor"></input>
                        </div>
                    </div>
                
                </div>

                <div class="row">
                    <div class="col-md-1">
                        <button class="btn btn-success"> Salvar </button>
                    </div>
                    <div class="col-md-1">
                        <button class="btn btn-danger"> Limpar </button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CadastroProduto;

