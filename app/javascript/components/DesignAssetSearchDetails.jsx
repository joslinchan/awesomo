import React, { Component } from "react";
import InspirationRailsApi from "../requests/inspiration";
import Tippy from "./ReactTippy";

class DesignAssetSearchDetails extends Component {
  constructor(props) {
    super(props);

     this.state = {
      design_asset: props,
      highlighted: false,
    };

    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

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
      }
    })
    .then(data => {
      this.setState({
        id_for_deletion: data.id,
        highlighted: true,
       })
    })
  }

  delete(event) {
    const { currentTarget } = event;
    InspirationRailsApi.destroy(this.state.id_for_deletion)
    .then(data => {
      if (data.status === 200) {
        this.setState({
         highlighted: false,
        })
      }
    })
  }

  render() {
    const { design_asset } = this.state;

    return(   
      <div 
        className={this.state.highlighted ? (
          "highlight card"
        ) : (
          "card"
        )}
      > 

        <div className="d-flex justify-content-center">
          {design_asset.title ? (
            <a href= {design_asset.url}>
              <h5 className="text-center leftright mb-2">
                {design_asset.title}
              </h5>
            </a>
          ) : (
            <a href= {design_asset.attributes.table.links.html}>
              <h5 className="leftright mb-2">
                Untitled
              </h5>
            </a>
          )}
        </div>
        
        <div className="d-flex justify-content-center">
          {design_asset.imageUrl ? (
            <a href= {design_asset.url}>
              <img 
                src={design_asset.imageUrl.replace("http", "https")} 
                className="leftright mb-2" 
              />
            </a> 
          ) : ( 
            <a href= {design_asset.attributes.table.links.html}>
              <img 
                src={design_asset.attributes.table.urls.thumb} 
                className="leftright mb-2" 
              />
            </a>
          )}
        </div>

        <div className="d-flex justify-content-center mb-2">
          <ul>
            {design_asset.colors && design_asset.colors.hex.map((hex, i) => (
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
            {design_asset.hex && 
              <li>
                <span id="hexLine">
                  #{design_asset.hex}
                  <div 
                    id="colourBox" 
                    style={{backgroundColor: '#' + design_asset.hex}}
                  >
                  </div>
                </span>
              </li>
            }
            {design_asset.attributes && 
              <li>
                <span id="hexLine">
                  {design_asset.attributes.table.color}
                  <div 
                    id="colourBox" 
                    style={{backgroundColor: design_asset.attributes.table.color}}
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
                onClick={() => this.save(design_asset.attributes ? (
                  design_asset.attributes.table.save_link
                ) : (
                  design_asset.save_link
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
