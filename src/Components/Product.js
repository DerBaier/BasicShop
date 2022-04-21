import React, { Component } from 'react'
import Waschmaschine from '../Images/Waschmaschine1.jpg'
import ShoppingCartButtons from './ShoppingCartButtons';

export default class Product extends Component {

    constructor(props) {
        super(props);
        /**
         * @param price {int} Preis für das Produkt
         */
        this.state = {
            onClick: props.onClick,
            productList: props.productList,
            deleteButton: props.deleteButton,
            /**Das ist der Preis */
            product: {
            price: props.price,
            title: props.title,
            producer: props.producer,
            image: props.image,
            productclasses: props.productclasses,
            }
        }

    }



    render() {


        return (
            <div className={"productDiv " + (this.state.product.productclasses ? this.state.product.productclasses : "")}>
                <img className="productImage" src={this.state.product.image} alt="Bild einer Waschmaschine"></img>
                <h6 className="productProducer">{this.state.product.producer}</h6>
                <h3 className="productTitle">{this.state.product.title}</h3>
                <p className="productPrice">{this.state.product.price},00 €</p>
                { this.state.deleteButton ? 
                <ShoppingCartButtons onClick={this.state.onClick}   deleteButton product={this.state.product}/>
                :
                <ShoppingCartButtons onClick={this.state.onClick}  product={this.state.product}/>
                }
            </div>
        )
    }
}
