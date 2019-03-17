import React, { Component } from 'react'
import './ProductComponent.css'

export default class ProductComponent extends Component {


    render() {
        let features;
        features = this.props.product.features.map((feature) => {
            return <li className="feature-item">{feature}</li>
        })

        return <div className="product-component">
            <div className="product-card">
                <div className="product-card-header">
                    <img className="product-card-header-image" src={this.props.product.headerImage}>
                    </img>
                    <span className="product-name">{this.props.product.productName}</span>
                </div>

                <div className="product-card-body">
                    <ul className="product-features">
                        {features}
                    </ul>

                </div>

                <div className="divider"></div>
                <div className="product-card-footer">
                    <div className="product-price">
                        <span className="original-price">₹ {this.props.product.originalPrice}</span>
                        <span className="actual-price">₹ {this.props.product.currentPrice}</span>
                    </div>

                    <div className="product-button-group">
                        <button className="cart-btn">Buy</button>
                        <button className="cart-btn"><i class="fa fa-cart-arrow-down " aria-hidden="true"></i></button>
                    </div>
                </div>

            </div>
        </div>
    }
}

