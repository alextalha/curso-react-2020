import  React, { Fragment }  from 'react';
import NavBar from "./components/navbar"
import Home from "./views/home"
 function App(props){
  return(
    <Fragment>
      <NavBar />
    <Home />
</Fragment>
  )
}

export default App;
