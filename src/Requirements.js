import React, { Component } from 'react'
import './Requirements.css'
let i=0;


export default class Requirements extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: [],
            ProductName:[],
            Quantity: []
        };
 
        
    }
    render() {
        function render_input(index) {
            return (<div>
                < input  onChange = {evt =>{evt.persist(); this.updateProduct(evt, index)}} className="Product-Name" placeholder="Enter Product Name">
                </input>
                <input  onChange = {pvt => {pvt.persist(); this.updateQuantity(pvt, index)}} className="quantity" placeholder="Enter Quantity Here">
                </input>
            </div>);

        }
        return (<div className="requirement">
            Enter your requirements
            {this.state.input}
        <button className="add" onClick={() => { this.setState((state) => { return { input: [...state.input, render_input.bind(this)(state.input.length)] } }) }}>Add another field+</button>
            <div className="inputGroup">
            </div>
            <button className="Submit"> submit</button>

        </div>
        );
    }//samajh nhi aaya mujhe kya bolna h=c
    //Mei samajh gaya. Ham function kal karahe hen, jisme this binded nahi he.
    updateProduct(evt, index){
        console.log(this.state.ProductName);
        this.setState((state)=>{
            let newProductName = [...state.ProductName];
            if(index>newProductName.length)
            {
                newProductName.push(evt.target.value);
            }

            else{
                newProductName[index] = evt.target.value;
            }
            return {
            ProductName : newProductName
        }});
        // console.log(ProductName);
    }
    updateQuantity(pvt, index){
        this.setState((state)=>{
            let newQuantityName = [...state.Quantity];
            if(index>newQuantityName.length)
            {
                newQuantityName.push(pvt.target.value);
            }

            else{
                newQuantityName[index] = pvt.target.value;
            }
            return {
            Quantity : newQuantityName
        }});
        }
    
    //Find why html is on top
}
