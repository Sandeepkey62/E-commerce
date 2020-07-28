import React, {Component } from 'react';
import Carts from './carts';
import './card.css';
import Product from './product';

const image={
 
  width:'5%',
  height:'auto'

}
const items={
  float:'right',
  margin:'auto',

}
class CardFunct extends Component {
  constructor() {
    super();
    this.state = {
      products : [
  {
    id: 1,
    name: "Apple",
    description: "Red apples",
    img: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
    price: 100
  },
  {
    id: 2,
    name: "Banana",
    description: "CCO (Chief Cat Officer)",
    img: "https://picsum.photos/312/300",
    price: 100
  },
  {
    id: 3,
    name: "Milk",
    description: "Milk for the lactose tollerent",
    img: "https://picsum.photos/311/300",
    price: 100
  },
  {
    id: 4,
    name: "Grapes",
    description: "I need those carbs",
    img: "https://picsum.photos/310/300",
    price: 70
  },
  {
    id: 5,
    name: "Mango",
    description: "Orange are orange",
    img: "https://picsum.photos/300/300",
    price: 110
  }
  ,
  {
    id: 6,
    name: "Kiwi",
    description: "Orange are orange",
    img: "https://picsum.photos/313/300",
    price: 120
  }
],
      cart: [],
      totalItem:0,
      totalsum:0,
      units: 1

    };
  }
  checkProduct=(productID)=> {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }
  handleAddFunc=(e)=> {
    let cartItem = this.state.cart;
    let productID = e.id;
    let productQty = e.units;
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].units =Number(cartItem[index].units) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(e);
    }
    this.setState({
      cart: cartItem,
    });
    setTimeout(
      function() {
        this.setState({
          units: 1
        });
      
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
          this.TotalISum(this.state.cart);
  }

 sumTotalItems=()=>{
   let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItem: total
    });

 }
 TotalISum=(e)=>{
    let sum=0;
    let cart=this.state.cart;
     for(var i=0;i<cart.length;i++)
     {
       sum+=cart[i].price*parseInt(cart[i].units);
     }
      this.setState({
      totalsum: sum
    });

 }
  handleRemove=(index,e)=>{   
  let cart = this.state.cart;
    let car = cart.findIndex(x => x.car == index);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });

    this.TotalISum(this.state.cart);
    this.sumTotalItems(this.state.cart);
 
} 
  render() {
    return (
      <React.Fragment>
      <main className="cards">
       <Carts details={this.state.cart}
       remofun={this.handleRemove}
        totalItems={this.state.totalItem}
        totalAmount={this.state.totalsum}
       />
          {
         this.state. products.map(p =>
           <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />)
        }

      </main>
      </React.Fragment>
    );
  }
}
export default CardFunct;
