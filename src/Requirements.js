import React, { Component } from 'react'
import './Requirements.css'
export default class Requirements extends Component {
    constructor(props) {
        super(props);
        this.state = { input: [] };
    }


    render() {
        function render_input() {
            return (<div>
                < input className="Product-Name" placeholder="Enter Product Name">
                </input>
                <input className="quantity" placeholder="Enter Quantity Here">
                </input>
            </div>);

        }
        return <div className="requirement">
            Enter your requirements
            {this.state.input}
        <button className="add" onClick={() => { this.setState((state) => { return { input: [...state.input, render_input()] } }) }}>Add another field+</button>
            <div className="inputGroup">
            </div>
            <button className="Submit"> submit</button>

        </div>

    }

    //Find why html is on top
}