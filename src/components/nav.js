import React ,{Component} from "react";
import './navs.css';
import {Link,NavLink} from 'react-router-dom';
class Nav extends Component{

	 render(){
	 	 return (
             <nav>
                <ul>
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/about">About</NavLink></li>
                   <li><a href="/contact">Contact</a></li>
                   <li><Link to="/privacy">Privacy</Link></li>
                   <li><Link to="/cart">Cart</Link></li>
                </ul>

             </nav>
	 	 	)
	 }
}
export default Nav;
