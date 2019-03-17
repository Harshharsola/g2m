import React, { Component } from 'react'
import './TagComponent.css'

export default class TagComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTagValue: "",
            shouldBlank: false
        }
    }

    respondToTagKey(e) {
        if (e.keyCode == 13) {
            this.setState(
                { currentTagValue: ""}    
            )

            this.props.addTag(this.state.currentTagValue);

        }
    }

    updateCurrentTagValue(e) {
        
        this.setState({
            currentTagValue: e.currentTarget.value
        });

        

    }

    deleteTag(tag) {
        this.props.deleteTag(tag);
    }

    
    render() {
        let tags = this.props.tags.map((tag) => {
            return <div className="tag">
                {tag}
                <button className="tag-cross" onClick={() => {
                    this.deleteTag(tag);
                }}>
                    <i class="fa fa-times cross-icon" aria-hidden="true"></i>
                </button>
            </div>
        })
        return <div className="tag-filter">
            <div className="tag-list">
                {tags}
                <input className="tag-input" onKeyDown={(e) => {
                    this.respondToTagKey(e);
                }} onChange={(e) => {
                    this.updateCurrentTagValue(e);
                }} value={this.state.currentTagValue} placeholder="Filter using tags" />
            </div>



        </div>

    }
}