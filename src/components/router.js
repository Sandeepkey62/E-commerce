import React ,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Contact from './contact';
import Cart from './carts';
import Cardfunction from './CardFunct';
import Nav from './nav';
const About =()=>{
	 return (
       <h2>Welcome About</h2>
	 )
}
class Routers extends Component{
    constructor(props){
  super(props);
       this.state={
       	 
       }
    }
	 render(){
	 	 return (  
  <Router>       
  <Nav/>
<div className="App">
 <Route path="/" exact component={Cardfunction} />
 <Route path="/about" component={About} /> 
 <Route path="/Contact" component={Contact} />
 <Route path="/Cart" component={Cart} />
</div>
  </Router>
	 	 	)
	 }
}
export default Routers;