import React, { Component } from 'react';

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [{
                producer:"Sony",
                image:"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77243079/fee_786_587_png",
                title: "Sony XMF201",
                price: 860,
            }, {
                producer:"Playstation",
                image:"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_77318984/fee_786_587_png" ,
                title:"Playstation 5 Controller",
                price: 50,
             }
             , {
                producer:"Samsung",
                image:"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86407303/fee_786_587_png",            
                title:"Samsung TAB10",
                price: 240,
             },{
                producer:"Nintendo",
                image:"https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-81845802/fee_786_587_png",
                title:"Pokemon Schwert",
                price: 60,
             }]
        }


    }

    render() {
        return (
            <div>
                <h1>Das ist die Startseite</h1>

                 
            </div>
         
        )
    }
}
