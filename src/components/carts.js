import React,{Component} from 'react';
import './cart.css';
const image={
 
  width:'15%',
  height:'auto'

}
const items={
  float:'right',
  margin:'auto',
}
class Carts extends Component{
	 render(props){
	 	 return (

	 	 	 <React.Fragment  style={items}>
	 	 	<h3>No. of Items</h3> <h2>{this.props.totalItems}</h2>
	 	 	 {
	 	 	 	 this.props.details.map((Name,id)=>
                     <ul className="cartsItem">
                     <li className="imgs"><img style={image} src={Name.img}/></li>
                         <li>Item: &nbsp;  {Name.name}</li>
                         <li>quantity:  &nbsp; {Name.units}</li>
                         <li>Rs. {Name.price}</li>
                   <li> {Name.price*Name.units}</li>
                   <li> <button onClick={this.props.remofun.bind(this, id)}>Remove</button></li>
                     </ul>
	 	 	 	 	)
	 	 	 }
<h1 className="totals">Total  { this.props.totalAmount }</h1>
	 	 	 </React.Fragment>

	 	 	)
	 }
}
export default Carts;