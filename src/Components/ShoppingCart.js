import React, { Component } from 'react'
import Product from './Product';
import { LoadList, AddToList } from '../shoppingcartlist';

export default class ShoppingCart extends Component {
    
     constructor(props){
            super(props);
            this.state = {
                products: [],
                cartVisible: false,
            }

            

            this.loadProducts = () =>{
                var productlist = LoadList;
                
                this.setState({products: productlist});
                console.log(this.state.products);
           
            }

            this.showProducts = () =>{
                this.loadProducts();
                this.setState({cartVisible: !this.state.cartVisible});
            }
         
        }

        componentDidMount(){
            this.loadProducts();
        }

    render() {
       
        

        return (
            <div>
                <button onClick={ this.showProducts}  className="productShoppingButton shoppingcartButton"> <div ></div></button>
                {
                    this.state.cartVisible ?  
                    <div className="shoppingCartContainer">
                        { this.state.products.map((value) => {
                                <Product image={value.image}></Product>
                        })                     
                        }
                    </div>
                     : null

                }
               
            </div>
        )
    }
}
