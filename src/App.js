import  React, { Fragment }  from 'react';
import NavBar from "./components/navbar"
 function App(props){
  return(
    <Fragment>
      <NavBar />
    <div className="alert alert-dismissible alert-warning">
    <button type="button" className="close" data-dismiss="alert">&times;</button>
    <h4 className="alert-heading">Bootswatch!</h4>
    <p className="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" className="alert-link">vel scelerisque nisl consectetur et</a>.</p>
  </div>
</Fragment>
  )
}

export default App;
