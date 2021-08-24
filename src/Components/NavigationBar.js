import React, { Component } from 'react'
import Logo from '../Images/Baiertech.png'
import Cross from '../Images/cross.svg';
import ShoppingCart from './ShoppingCart';

export default class NavigationBar extends Component {
  
    constructor(props){
            super(props);
            this.state = {
                visible: false,
            }
        }
  

    
    render() {
          return (
            <div>
                <nav>
                    { !this.state.visible ? 
                    <ul className="navBarUL navBarHidden" >
                        
                        <li>
                            <a href="/">Home</a>
                        </li>
                          <li>
                            <a href="/discover">Entdecken</a>
                        </li>
                        <li>
                               <img height="75px" width="75px" src={Logo}></img>
                        </li>
                          <li>
                            <a href="/product">Produkte</a>
                        </li>
                         <li>
                            <a href="/support">Kontakt</a>
                        </li>
                        
                    </ul>
                    : 
                     <ul className="navBarUL navbaranim">
                       <li>
                           <div class="NavLogoDiv">
                         
                               <img className="NavLogo" height="65px" width="65px" src={Logo}></img>
                            </div>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                          <li>
                            <a href="/discover">Entdecken</a>
                        </li>
                      
                          <li>
                            <a href="/product">Produkte</a>
                        </li>
                         <li>
                            <a href="/support">Kontakt</a>
                        </li>
                        
                    </ul>
    }
                    { !this.state.visible ? 
                        <div className="NavTopRight">
                              <ShoppingCart/>
                        <button onClick={ () => {this.setState({visible: true})}}  className="NavMenuButton">
                            <svg viewBox="0 0 100 80" width="40" height="40">
                                <rect width="100" height="20"></rect>
                                <rect y="30" width="100" height="20"></rect>
                                <rect y="60" width="100" height="20"></rect>
                            </svg> 
                        </button> 
                    
                      
                        </div>
                    
                        : 
                         <div className="NavTopRight">
                              <ShoppingCart/>   
                           <button onClick={ () => {this.setState({visible: false})}}  className="NavMenuButton">
                            <img height="40px" width="40px" src={Cross}></img>
                        </button> 
                     
                      
                        </div>
                    }
                </nav>
            </div>
        )
    }
}
