import React, { Component } from 'react';
import './App.css';
import TopBarComponent from './TopBarComponent'
import NavbarComponent from './NavbarComponent'
import ProductComponent from './ProductComponent'
import RequirementComponent from './RequirementComponent';
import SidePanelComponent from './SidePanelComponent'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import QuotationPortal from './QuotationPortal';
import BiddingPortal from './BiddingPortal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
  }

  addTag(tag) {
    this.setState((state) => {
      return { ...state, tags: [...state.tags, tag], };
    })

  }

  deleteTag(tag) {
    this.setState((state) => {
      return {
        ...state, tags: state.tags.filter((val) => {
          return val !== tag;
        })
      };
    })
  }



  //Have to show button color
  render() {
    let testComponent = [];
    let testProduct = {
      productName: "Oculus Rift",
      headerImage: "oculusrift.jpg",
      originalPrice: 250000,
      currentPrice: 2,
      features: ["High tech Entertainment System", "Revives you from death", "Sideeffects: Possible death"],
      selectedTags: this.state.selectedTags

    }
    for (let i = 0; i < 10; i++) {
      testComponent.push(<ProductComponent product={testProduct}></ProductComponent>)
    }
    let testRequirement = {
      name: "Fortis Hospitals",
      requirements: ["ECG Machine - 100", "Defribilliator - 1"],
      user_image: "profile.jpg"

    }
    let requirementtestComponent = [];
    let requirementProps = [{
      tags: ["alpha", "beta"]
    }, {
      tags: ["gamma"]
    },

    {
      tags: ["gamma"]
    },

    {
      tags: ["gamma"]
    },
    {
      tags: ["alpha", "beta"]
    },

    {
      tags: ["radon"]
    },
    {
      tags: ["gamma"]
    },

    {
      tags: ["radon"]
    },
    {
      tags: ["gamma"]
    },

    {
      tags: ["radon"]
    },

    ]

    //   if (this.props.Required.tags.filter((tag) => {
    //     return this.props.selectedTags.find((selectedTag) => {
    //         return tag == selectedTag;
    //     }) !== undefined;
    // }).length > 0) {
    //     return <li className="requirement-list">{requirement}</li>
    // }
    for (let i = 0; i < 10; i++) {
      if (requirementProps[i].tags.filter((tag) => {
        return this.state.tags.find((selectedTag) => {
          return selectedTag.toLowerCase() == tag.toLowerCase();
        })
      }).length > 0 || this.state.tags.length == 0) {
        requirementtestComponent.push(<RequirementComponent Required={
          Object.assign({}, testRequirement, requirementProps[i], { id: i })}
          selectedTags={this.state.tags} key={i}
        ></RequirementComponent>)
      }

    }
    let sidepanel_component = <SidePanelComponent addTag={(tag) => {
      this.addTag(tag);
    }} deleteTag={(tag) => {
      this.deleteTag(tag)
    }} tags={this.state.tags}></SidePanelComponent>
    return <Router>
      <div className="background">
        <TopBarComponent></TopBarComponent>
        <NavbarComponent></NavbarComponent>
        <Route exact path="/" render={() => {
          return <div className="testcomponent">
            <div className="inner-test"> {testComponent}
            </div>
          </div>
        }} />

        <Route path="/biddingportal" exact render={() => {
          return <div className="requirement-component-list">
            {requirementtestComponent}
            {sidepanel_component}
          </div>
        }} />
        <Route path="/requirementportal/apply/:id" component={BiddingPortal} />
      </div>
    </Router>

    {/* <div className="requirement-component-list">
      {testComponent}
        </div> */}







  }
}

export default App;
