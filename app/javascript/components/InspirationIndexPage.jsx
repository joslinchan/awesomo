import React, {Component} from "react";
import InspirationApi from "../requests/inspiration";

class InspirationIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      inspirations: [],
      boxShowing: false,
    };

    this.deleteInspiration = this.deleteInspiration.bind(this);
  }

  componentDidMount() {
    InspirationApi.all()
    .then(inspirations => {
      this.setState({
        loading: false, 
        inspirations: inspirations, 
        boxShowing: true,
      })
    })
    .catch(() => {
      this.setState({loading: false});
    });
  }

  deleteInspiration(event) {
    const {currentTarget} = event;
    const inspirationId = parseInt(currentTarget.dataset.id, 10);
    const {inspirations} = this.state;

    this.setState({
      inspirations: inspirations.filter(inspiration => inspiration.id !== inspirationId),
      boxShowing: false,
    })

    InspirationApi.destroy(inspirationId);
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
      <div className="container">
      
        <ul>
          {inspirations.map((inspire, index) => (
            <div key={index} className="card mb-4">
              <li key={inspire.id}>
                <a href={inspire.url}><p>{inspire.title}</p></a>
                <a href={inspire.url}><img src={inspire.image_url} /></a>
                <ul>
                {inspire.hexes.map((hex, i) => (
                    <li key={index+i}>{hex.code}</li>
                ))}
                </ul>
                <button data-id={inspire.id} onClick={this.deleteInspiration}>Delete</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default InspirationIndexPage;
