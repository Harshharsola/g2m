import React, { Component } from 'react'
import './biddingportal.css'
export default class BiddingPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotationValue: '',
            Price: ''
        }

    }

    postFormData = async function (e) {
        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.postFormData} id="bidding-portal-form" className="bidding-portal">
                <div className="name-field">
                    Enter your Name</div><input className="name-class"></input>

                <div className="contact-field">
                    Enter your Phone Number</div><input className="contact-detail"></input>

                <div className="summary-field">Enter Quotation Here
                <textarea value={this.state.quotationValue} onChange={evt => this.updateQuotationValue(evt)} className="quotation-summary" placeholder="Submit A Detailed Overview Of Your Quotation" ></textarea>
                </div>
                <div className="price-field">
                    Enter Your Final Price</div>
                <input value = {this.state.Price} onChange = {pvt => this.updatePrice(pvt)} className="final-price"></input>
                <div className="submit-class">
                    <input type="submit" className="submit" name="Submit" />
                </div>
            </form>
        )



    }

    updateQuotationValue(evt) {
        this.setState({
            quotationValue: evt.target.value,
        });
        console.log("quotation:",evt.target.value);
    }
    updatePrice(pvt) {
        this.setState({
            Price : pvt.target.value
        });
        console.log("price:",this.state.Price);

    }

}
