import React, {Component} from "react";
import {BASE_URL} from "../requests/config";
import InspirationApi from "../requests/inspiration";

class InspirationDetails extends Component {
  constructor(props) {
    super(props);

     this.state = {
      //loading: true,
      thing: props,
      highlighted: false,
    };
    //console.log(this.state);

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
    
    
    
/*     return fetch(`${BASE_URL}/inspirations`, {
      credentials: "include"
    })
    .then(inspirations => console.log(inspirations)) */

    //const inspirationId = 
    console.log(this.state.id_for_deletion)
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
            <div className={this.state.highlighted ? "highlight card" : "card"}> 
              {thing.title ? (
                <a href= {thing.url}>
                  {thing.title}
                </a>
              ) : (
                <a href= {thing.attributes.table.links.html}>
                  Untitled
                </a>
              )}
              <br />
              {thing.imageUrl ? (
                <a href= {thing.url}>
                  <img src={thing.imageUrl} />
                </a> 
              ) : ( 
                <a href= {thing.attributes.table.links.html}>
                  <img src={thing.attributes.table.urls.thumb} />
                </a>
              )}
              <br />
              <ul>
                {thing.colors && thing.colors.hex.map((hex, i) => (
                  <li key={hex+i}>
                    #{hex}
                  </li>
                ))}
                {thing.hex && <li>#{thing.hex}</li>}
                {thing.attributes && <li>{thing.attributes.table.color}</li>}
              </ul>
              
              {this.state.highlighted ? (
                (thing.imageUrl ? (
                  <button data-id={thing.imageUrl} onClick={this.delete}>Unsave ColourLover</button>
                ) : (
                  <button data-id={thing.attributes.table.urls.thumb} onClick={() => this.delete}>Unsave Unsplash</button>
                ))             
              ) : (
                <button onClick={() => this.save(thing.attributes ? (
                  thing.attributes.table.save_link
                  ) : (
                    thing.save_link
                ))}>
                  Save
                </button>
              )}
            
            </div>

    )
  }
}

export default InspirationDetails;
