import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './NavbarComponent.css'


export default class NavbarComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={index: -1};
    }

    setIndex(index)
    {
        this.setState((state)=>{
            if(state.index==index)
            {
                return {...state, index: -1};
            }

            else{
                return {...state, index: index};
            }
            
        })
    }

    
    render(){
        let arr=["Category","Vendors","New Arrivals", <Link to="/biddingportal">Click</Link>];
        let optionsList = [[],[], [], [], []];

        arr=arr.map((elem,i)=>{
            let dropdownCardComponent;
            if(this.state.index==i)
            {
                dropdownCardComponent = this.createCard(optionsList[i]);
            }
            return <li className="nav-item" onClick={()=>{
                this.setIndex(i);
            }}>{elem}
            {dropdownCardComponent}
            
            
            <i class="fas fa-chevron-down down"></i></li>;
        })
    return <div className="navbar-component">
        <ul className="navbar">
        {arr}
        </ul>
        
        </div>
    }
    createCard(list) {
        list=list.map((item)=>{
            return <li className="card-item">{item}</li> ;  
        }
        )    
            let statement =
                <div className="card">
                    <li className="card-item">{list}</li>   
                </div>
           

        return statement;
    }

}