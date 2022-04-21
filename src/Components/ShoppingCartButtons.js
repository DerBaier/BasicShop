import React, { Component } from 'react'
import { AddToList, LoadList } from '../shoppingcartlist'

export default class ShoppingCartButtons extends Component {

    constructor(props){
        super(props);
        console.log(`Props DeleteButton: ${props.onClick}`);
        this.state={
            onClick: props.onClick,
            productList: props.productList,
            deleteButton: props.deleteButton,
            product: props.product,
        }

        

        this.addtocart = () => {
           
            AddToList(this.state.product);   
            this.setState( {productList: LoadList()});     
            this.state.onClick();            
        }

        this.clicked = () => {
            this.state.onClick();
        }

          
       
}


    render() {
        return (
            <div>
                      <button onClick={this.addtocart} className="productShoppingButton"> <div ></div></button>  
                      {
                          this.state.deleteButton ? 
                          <button onClick={this.clicked}>Delete</button>: null
                      }          
            </div>
        )
    }
}
