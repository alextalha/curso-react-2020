import React from 'react'

import { HashRouter, Switch, Route} from 'react-router-dom'

import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'
import ListarProduto from './views/produtos/listar'

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path={'/cadastro-produto'} component={CadastroProduto} />
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/listar-produto'} component={ListarProduto} />
            </Switch>
        </HashRouter>
        
    )

}