import React, { Component } from 'react'
import Waschmaschine from '../Images/Waschmaschine1.jpg'
import ShoppingCartButton from './ShoppingCartButton';

export default class Product extends Component {

    constructor(props) {
        super(props);
        /**
         * @param price {int} Preis für das Produkt
         */
        this.state = {
            /**Das ist der Preis */
            price: props.price,
            title: props.title,
            producer: props.producer,
            image: props.image,
            productclasses: props.productclasses,
        }

    }



    render() {


        return (
            <div className={"productDiv " + (this.state.productclasses ? this.state.productclasses : "")}>
                <img className="productImage" src={this.state.image} alt="Bild einer Waschmaschine"></img>
                <h6 className="productProducer">{this.state.producer}</h6>
                <h3 className="productTitle">{this.state.title}</h3>
                <p className="productPrice">{this.state.price}</p>
                <ShoppingCartButton/>
            </div>
        )
    }
}
