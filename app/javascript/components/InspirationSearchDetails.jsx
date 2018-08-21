import React, {Component} from "react";
import InspirationApi from "../requests/inspiration";

class InspirationDetails extends Component {
  constructor(props) {
    super(props);

     this.state = {
      //loading: true,
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
    const {loading, thing} = this.state;

/*      if (loading) {
      return (
        <main>
          <h2>Loading searches...</h2>
        </main>
      );
    }  */


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
              <img src={thing.imageUrl} className="leftright mb-2" />
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
                #{hex}
              </li>
            ))}
            {thing.hex && <li>#{thing.hex}</li>}
            {thing.attributes && 
              <li>
                {thing.attributes.table.color}
              </li>
            }
          </ul>
        </div>
        
        <div className="d-flex justify-content-center">
          {this.state.highlighted ? (
            <button 
              className="btn btn-outline-dark btn-block"
              onClick={this.delete}>
              <i className="fas fa-heart"></i>
            </button>           
          ) : (
            <button 
              className="btn btn-outline-dark btn-block"
              onClick={() => this.save(thing.attributes ? (
              thing.attributes.table.save_link
              ) : (
                thing.save_link
            ))}>
              <i className="far fa-heart"></i>
            </button>
          )}
        </div>

      </div>
   
    )
  }
}

export default InspirationDetails;
