import React, {Component} from "react";
import InspirationApi from "../requests/inspiration";
import Tippy from './ReactTippy';

class InspirationDetails extends Component {
  constructor(props) {
    super(props);

     this.state = {
      thing: props,
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
        highlighted: true
       })
    })
  }

  delete(event) {
    const {currentTarget} = event;
    InspirationApi.destroy(this.state.id_for_deletion)
    .then(data => {
      if (data.status === 200) {
        this.setState({
         highlighted: false
        })
      }
    })
  }

  render() {
    const { thing } = this.state;

    return(
    
      <div 
        className={this.state.highlighted ? (
          "highlight card"
        ) : (
          "card"
        )}
      > 

        <div className="d-flex justify-content-center">
          {thing.title ? (
            <a href= {thing.url}>
              <h5 className="text-center leftright mb-2">{thing.title}</h5>
            </a>
          ) : (
            <a href= {thing.attributes.table.links.html}>
              <h5 className="leftright mb-2">Untitled</h5>
            </a>
          )}
        </div>
        
        <div className="d-flex justify-content-center">
          {thing.imageUrl ? (
            <a href= {thing.url}>
              <img src={thing.imageUrl.replace("http", "https")} className="leftright mb-2" />
            </a> 
          ) : ( 
            <a href= {thing.attributes.table.links.html}>
              <img src={thing.attributes.table.urls.thumb} className="leftright mb-2" />
            </a>
          )}
        </div>

        <div className="d-flex justify-content-center mb-2">
          <ul>
            {thing.colors && thing.colors.hex.map((hex, i) => (
              <li key={hex+i}>
                <span id="hexLine">
                  #{hex}
                  <div 
                    id="colourBox" 
                    style={{backgroundColor: '#'+hex}}
                  >
                  </div>
                </span>
              </li>
            ))}
            {thing.hex && 
              <li>
                <span id="hexLine">
                  #{thing.hex}
                  <div 
                    id="colourBox" 
                    style={{backgroundColor: '#'+thing.hex}}
                  >
                  </div>
                </span>
              </li>
            }
            {thing.attributes && 
              <li>
                <span id="hexLine">
                  {thing.attributes.table.color}
                  <div 
                    id="colourBox" 
                    style={{backgroundColor: thing.attributes.table.color}}
                  >
                  </div>
                </span>
              </li>
            }
          </ul>
        </div>
        
        <div className="d-flex justify-content-center">
          {this.state.highlighted ? (
            <Tippy duration={200} delay={50} arrow={true} arrowType="round" animation="scale">
              <button 
                className="btn btn-outline-dark btn-block"
                title="Unsave item"
                onClick={this.delete}>
                <i className="fas fa-heart"></i>
              </button>          
            </Tippy> 
          ) : (
            <Tippy duration={200} delay={50} arrow={true} arrowType="round" animation="scale">
              <button 
                className="btn btn-outline-dark btn-block"
                title="Save item"
                onClick={() => this.save(thing.attributes ? (
                thing.attributes.table.save_link
                ) : (
                  thing.save_link
              ))}>
                <i className="far fa-heart"></i>
              </button>
            </Tippy>
          )}
        </div>

      </div>
   
    )
  }
}

export default InspirationDetails;
