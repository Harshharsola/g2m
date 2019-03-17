import React, { Component } from 'react'
import './RequirementComponent.css'
import {Link} from 'react-router-dom'

export default class RequirementComponent extends Component {
    render() {
        let requirements;
        console.log(this.props.Required.id);
        requirements = this.props.Required.requirements.map((requirement) => {
            
            return <li className="requirement-list">{requirement}</li>
        })
        return (<div className="requirement-component">
            <div className="requirement-card">
                
                <img src={this.props.Required.user_image} className="user-profile" />

                <div className="user-name">{this.props.Required.name}</div>
                <div className="card-body">

                    <div className="requirement-list">{requirements}</div>
                </div>



                <div className="requirement-button-group">
                    <div className="apply-btn">
                    
                    <Link to={"/requirementportal/apply/"+this.props.Required.id} className="apply-btn-link">Apply Now
                    </Link>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}