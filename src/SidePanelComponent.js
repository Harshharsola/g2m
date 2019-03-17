import React , {Component} from 'react'
import './SidePanelComponent.css'
import TagComponent from './TagComponent';
export default class SidePanelComponent extends Component{
    render(){
        return(
            <div className="side-panel-component">
            <div className="filters">
            <div>
            <input type = "checkbox"></input>Hospital Equipmemt
            </div>
            <div>
            <input type = "checkbox"></input>Hospital Furniture
            </div>
            </div>

            <TagComponent addTag={this.props.addTag} deleteTag={this.props.deleteTag} tags={this.props.tags}/>

            </div>
        )
    }
}