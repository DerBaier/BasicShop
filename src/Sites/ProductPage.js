import React, { Component } from 'react'

import Product from '../Components/Product'
export default class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [
                {
                    producer:"Bosch",
                    title:"Waschmaschine1",
                    price:"50€",
                    image:"https://www.alternate.de/p/160x160/6/6/Bosch_WAG28400_Serie___6__Waschmaschine@@1633966.jpg"
                },
                 {
                    producer:"Samsung",
                    title:"Waschmaschine2",
                    price:"250€",
                    image:"https://www.alternate.de/p/160x160/9/Samsung_WW80T534AAX_S2__Waschmaschine@@9fwedu84.jpg"
                },
                 {
                    producer:"Sharp",
                    title:"Waschmaschine3",
                    price:"550€",
                    image:"https://www.alternate.de/p/160x160/5/7/Sharp_ES_HFB714AWA_DE__Waschmaschine@@1742575.jpg"
                },
                 {
                    producer:"Siemens",
                    title:"Waschmaschine4",
                    price:"1550€",
                    image:"https://www.alternate.de/p/160x160/9/Siemens_WM14N122_iQ300__Waschmaschine@@9fwedsmj.jpg"
                }
            ]
        }
    }
    
    render() {
        return (
            <div >
                <h1>Dies ist die Produkt Seite</h1>
                <div className="productsDiv">
                  {this.state.products.map((product) =>{
                      return <Product price={product.price} producer={product.producer} title={product.title} image={product.image} />
                  })}
                </div>
            </div>
        )
    }
}
