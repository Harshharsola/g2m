import React, {Component} from 'react'
// import 'QuotationPortal.js'
import './biddingportal.css'
export default class QuotationPortal extends Component{
    render(){
        return <div className="bidding-portal">
        <div className="name-field">
            Enter your Name</div><input className="name-class"></input>

        <div className="contact-field">
            Enter your Phone Number</div><input className="contact-detail"></input>

        <div className="summary-field">Enter Quotation Here
        <textarea className="quotation-summary" placeholder="Submit A Detailed Overview Of Your Quotation" ></textarea>
        </div>
        <div className="price-field">
            Enter Your Final Price</div><input className="final-price"></input>
        <div className="submit-class">
        <button className="submit">Submit</button>
        </div>
        

    </div>
}
}