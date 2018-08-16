import React, {Component} from "react";
import Inspiration from "../requests/inspiration";

class InspirationIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      inspirations: []
    };
  }

  componentDidMount() {
    Inspiration.all()
    .then(inspirations => {
      this.setState({loading: false, inspirations: inspirations})
    })
    .catch(() => {
      this.setState({loading: false});
    });
  }
  
  render() {
    const {loading, inspirations} = this.state;

    if (loading) {
      return(
        <main>
          <h2>Loading Inspirations...</h2>
        </main>
      );
    }

    return(
      <div className="InspirationIndexPage">
        <h1>Collection</h1>
        <ul>
          {inspirations.map((inspire, index) => (
            <li key = {inspire.id}>
              <a href={inspire.url}><p>{inspire.title}</p></a>
              <a href={inspire.url}><img src={inspire.image_url} /></a>
              <ul>
              {inspire.hexes.map((hex, i) => (
                  <li key= {index+i}>{hex.code}</li>
              ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default InspirationIndexPage;