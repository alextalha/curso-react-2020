
const PRODUTO = '_PRODUTOS';

function ErroValidacao(errors){
    this.erros = errors;

}

export default class ProdutoService {




    validar = (produtos) => {

       const erros  = []

       if(!produtos.name){
           erros.push("Campo Nome obrigatório")
       }
       if(!produtos.sku){
            erros.push("Campo Sku obrigatório")
        }
        if(!produtos.preco && produtos.preco <= 0){
            erros.push("Campo preço obrigatório")
        }
        if(!produtos.fornecedor){
            erros.push("Campo Fornecedor obrigatório")
        }
        if(!produtos.fornecedor){
            erros.push("Campo Nome obrigatório")
        }
       if(erros.length > 0 ){
           throw ErroValidacao(erros)
       }
    }


    salvar = (produto) =>{

        this.validar(produtos)

        let produtos = localStorage.getItem(PRODUTO)
        
        if(!produtos)
        {
           produtos = []
        }else{
            produtos = JSON.parse(produtos)
            
        }

        produtos.push(produto)
        localStorage.setItem(PRODUTO,JSON.stringify(produtos))
    }
    
    }
