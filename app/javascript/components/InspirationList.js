import React, {Component} from "react";

class InspirationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inspirations: [...props.inspirations]
    };

    console.log(this.state);
  }
  
  render() {
    const {inspirations} = this.state;

    return(
      <div className="InspirationList">
        <h1>Inspirations</h1>
        <ul>
          {inspirations.map((inspire, index) => (
            <li key = {inspire.id}>
              <a href={inspire.url}><p>{inspire.title}</p></a>
              <a href={inspire.url}><img src={inspire.image_url} /></a>
              {inspire.hexes.map(hex => (
                <ul>
                  <li>{hex.code}</li>
                </ul>
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default InspirationList;
