import  React, { Fragment }  from 'react';
import NavBar from "./components/navbar"
import Rotas from './rotas'

 function App(props){
  return(
    <Fragment>
      <NavBar />
      <Rotas />
</Fragment>
  )
}

export default App;
