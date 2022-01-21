import React, { Component } from 'react'
import { AddToList, LoadList } from '../shoppingcartlist'

export default class ShoppingCartButton extends Component {

    constructor(props){
        super(props);
        this.state={
            product: props.product,
        }

        

        this.addtocart = () => {
            AddToList(this.state.product);                    
        }

        this.loadList = () =>{
            

        }        
       
}


    render() {
        return (
            <div>
                      <button onClick={this.addtocart} className="productShoppingButton"> <div ></div></button>
            </div>
        )
    }
}
