import React,{Component} from 'react';
import './card.css';
 class Product extends Component{
 	render(props){
 		const {id,name,price,img,units,addFunc}=this.props;
 	    return (
                 <React.Fragment>
                 <div className="cards">
                    <div className="card">
                   
                      <img src={this.props.img} alt=""/>
                      <div className="card_info">
                      <span className="card_category">Rs.{price}</span>
                      <h3>{name}</h3>
                      <button 
                      onClick={() => addFunc({id, name,img, price, units: 1})}>AddItem</button>
                      </div>
                     </div>
                   </div>
            
                 </React.Fragment>
 	   	)
 	   }
 }
 export default Product;