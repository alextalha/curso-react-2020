
const PRODUTO = '_PRODUTOS';

export default class ProdutoService {

    salvar = (produto) =>{

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
