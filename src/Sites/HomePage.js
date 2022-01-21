import React, { Component } from 'react';
import ProductGallery from '../Components/ProductGallery';
import Product
 from '../Components/Product';
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Das ist die Startseite</h1>
                 { /* <ProductGallery/> */}

                 <div className="productHighlights">
                    <Product producer="Sony" image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77243079/fee_786_587_png"
                     title="Sony XMF201"></Product>

                    <Product producer="Playstation" image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77318984/fee_786_587_png" 
                    title="Playstation 5 Controller"></Product>

                    <Product producer="Samsung" image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86407303/fee_786_587_png" 
                    title="Samsung TAB10"></Product>

                    <Product producer="Nintendo" image="https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-81845802/fee_786_587_png" 
                    title="Pokemon Schwert"></Product>
                 </div>
                 <p>Das ist ein Test</p>
            </div>
        )
    }
}
