import React, { Component } from 'react';
import Product from './Product';

export default class ProductGallery extends Component {

    constructor(props){
        super(props);
  
        this.state = {
            products: [
                {
                    producer:"Bosch",
                    title:"Waschmaschine1",
                    price:"50€",
                    id:0,
                    image:"https://www.alternate.de/p/160x160/6/6/Bosch_WAG28400_Serie___6__Waschmaschine@@1633966.jpg"
                },
                 {
                    producer:"Samsung",
                    title:"Waschmaschine2",
                    price:"250€",
                    id:1,
                    image:"https://www.alternate.de/p/160x160/9/Samsung_WW80T534AAX_S2__Waschmaschine@@9fwedu84.jpg"
                },
                 {
                    producer:"Sharp",
                    title:"Waschmaschine3",
                    price:"550€",
                    id:2,
                    image:"https://www.alternate.de/p/160x160/5/7/Sharp_ES_HFB714AWA_DE__Waschmaschine@@1742575.jpg"
                },
                 {
                    producer:"Siemens",
                    title:"Waschmaschine4",
                    price:"1550€",
                    id:3,
                    image:"https://www.alternate.de/p/160x160/9/Siemens_WM14N122_iQ300__Waschmaschine@@9fwedsmj.jpg"
                }
            ],

            galleryproducts: [],
            selectedIndex: 3,
            indexswitch: false,
        }
    
    }

    checkProductIndex(index){
    var newindex = this.state.selectedIndex + index;
          if(newindex ==1 && index == -1)
        {
            return newindex = 0; 
        }
        else if(newindex >= this.state.products.length && index == 1)
        {
            return  newindex = this.state.products.length - 1; 
        }
        return newindex;
    }

    swapProducts = (elemA, elemB) =>{

    }

    switchProduct = (index) =>{
        this.setState({selectedIndex:  this.checkProductIndex(index), indexswitch: true});
        
    
     
      
    }

    checkProduct = (index) =>{
        if(index < 0)
            return this.state.products.length -1;
        else if(index > 3)
            return 0;
        else return index;
    }

    

    render() {
        return (
            <div>
            <div className=" ProductGallery" onClick={this.productclicked} >
              
                {
              
               
                this.state.products.map((product) =>{                   
                           return  <Product  price={product.price} producer={product.producer} title={product.title} image={product.image} />                
                })
            
            }
            </div>
            <div onClick={() => this.switchProduct(1)} className="ProductGalleryArrow ProductGalleryNext">&gt;</div>
              <div onClick={() => this.switchProduct(-1)} className="ProductGalleryArrow ProductGalleryPrev">&lt;</div>
            </div>
        )
    }
}
