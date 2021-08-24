import React, { Component } from 'react'

export default class ShoppingCart extends Component {
    
     constructor(props){
            super(props);
            this.state = {
                 price: props.price,
                title: props.title,
                producer: props.producer,
                image: props.image,
                cartVisible: false,
            }
        }
    render() {
       
        

        return (
            <div>
                <button className="productShoppingButton"> <div ></div></button>
                <div className="shoppingCartContainer">
                    
                </div>
            </div>
        )
    }
}
