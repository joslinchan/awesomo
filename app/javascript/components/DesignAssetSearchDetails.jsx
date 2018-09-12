import React, { Component } from "react";
import InspirationRailsApi from "../requests/inspiration";
import Tippy from "./ReactTippy";

class DesignAssetSearchDetails extends Component {
  constructor(props) {
    super(props);

     this.state = {
      designAsset: props,
      highlighted: false,
    };

    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  };

  save(url) {
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.status === 200) {
        return response.json()
      };
    })
    .then(data => {
      this.setState({
        idForDeletion: data.id,
        highlighted: true,
       });
    });
  };

  delete(event) {
    const { currentTarget } = event;
    InspirationRailsApi.destroy(this.state.idForDeletion)
    .then(data => {
      if (data.status === 200) {
        this.setState({
         highlighted: false,
        });
      };
    });
  };

  render() {
    const { designAsset } = this.state;

    return(   
      <div 
        className={this.state.highlighted ? (
          "highlight card"
        ) : (
          "card"
        )}
      > 

        <div className="center-content">
          {designAsset.title ? (
            <a href= {designAsset.url}>
              <h5 className="text-center leftright mb-2">
                {designAsset.title}
              </h5>
            </a>
          ) : (
            <a href= {designAsset.attributes.table.links.html}>
              <h5 className="leftright mb-2">
                Untitled
              </h5>
            </a>
          )}
        </div>
        
        <div className="d-flex justify-content-center">
          {designAsset.imageUrl ? (
            <a href= {designAsset.url}>
              <img 
                src={designAsset.imageUrl.includes("amazonaws") ? designAsset.imageUrl : designAsset.imageUrl.replace("http", "https")} 
                className="leftright mb-2" 
              />
            </a> 
          ) : ( 
            <a href= {designAsset.attributes.table.links.html}>
              <img 
                src={designAsset.attributes.table.urls.thumb} 
                className="leftright mb-2" 
              />
            </a>
          )}
        </div>

        <div className="d-flex justify-content-center mb-2">
          <ul>
            {designAsset.colors && designAsset.colors.hex.map((hex, i) => (
              <li key={hex+i}>
                <span id="hexLine">
                  #{hex}
                  <div 
                    id="colourBox" 
                    style={{backgroundColor: '#' + hex}}
                  >
                  </div>
                </span>
              </li>
            ))}
            {designAsset.hex && 
              <li>
                <span id="hexLine">
                  #{designAsset.hex}
                  <div 
                    id="colourBox" 
                    style={{backgroundColor: '#' + designAsset.hex}}
                  >
                  </div>
                </span>
              </li>
            }
            {designAsset.attributes && 
              <li>
                <span id="hexLine">
                  {designAsset.attributes.table.color}
                  <div 
                    id="colourBox" 
                    style={{backgroundColor: designAsset.attributes.table.color}}
                  >
                  </div>
                </span>
              </li>
            }
          </ul>
        </div>
        
        <div className="d-flex justify-content-center">
          {this.state.highlighted ? (
            <Tippy 
              duration={200} 
              delay={50} 
              arrow={true} 
              arrowType="round" 
              animation="scale"
            >
              <button 
                className="btn btn-outline-dark btn-block"
                title="Unsave item"
                onClick={this.delete}>
                <i className="fas fa-heart"></i>
              </button>          
            </Tippy> 
          ) : (
            <Tippy 
              duration={200} 
              delay={50} 
              arrow={true} 
              arrowType="round" 
              animation="scale"
            >
              <button 
                className="btn btn-outline-dark btn-block"
                title="Save item"
                onClick={() => this.save(designAsset.attributes ? (
                  designAsset.attributes.table.save_link
                ) : (
                  designAsset.save_link
              ))}>
                <i className="far fa-heart"></i>
              </button>
            </Tippy>
          )}
        </div>

      </div>
    );
  };
};

export default DesignAssetSearchDetails;
