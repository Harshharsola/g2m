import React, { Component } from 'react';
import './TopBarComponent.css'

class TopBarComponent extends Component {
    constructor(props)
    {
        super(props);

        this.state={
            login: false
        }
    }

    

    toggleState(){
        this.setState((state)=>{
            return ({...state, login: !state.login});
        })
    }

    //On document click close
    

    render() {
        let dropdownComponent;
        if(this.state.login)
        {
            dropdownComponent = <LoginDropdownComponent/>;
        }
        
        return (<div className="top-bar-component">
            <div className="top-bar-left">
                <div className="search-bar">

                    <i class="fas s-icon fa-search"></i>
                    <input className="search-input-box" placeholder="Search here"></input>
                    <button className="search-btn">Search</button>
                </div>


            </div>

            <div class="top-bar-right">

                <button class="cart-btn">
                    <i class="fa fa-cart-arrow-down " aria-hidden="true"></i>
                </button>
                <div class="login-btn-comp">
                <button class="login-btn" onClick={()=>{
                    this.toggleState();
                }}>
                    Login
    
                </button>
                {dropdownComponent}
                </div>
                
                

            </div>

        </div>)
    }

}

class LoginDropdownComponent extends Component {
    

    
    render() {
        return (<div className="login-dropdown-box">
            <div className="card">
            <form className="login-form">
            <input name="username" className="input-form" placeholder="Enter username"></input>
            <input name="password" className="input-form" type="password" placeholder="Enter password"></input>
            </form>
            </div>   
        </div>)
    }
}

export default TopBarComponent

