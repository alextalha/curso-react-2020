
const PRODUTO = '_PRODUTOS';

export function ErroValidacao(errors){
    this.erros = errors;

}

export default class ProdutoService {

    validar = (produtos) => {

     
       const erros  = []

       console.log(produtos)
       if(!produtos.nome){
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


       if(erros.length > 0 ){
           throw new ErroValidacao(erros)
       }
    }

    salvar = (produto) =>{

        this.validar(produto)

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
