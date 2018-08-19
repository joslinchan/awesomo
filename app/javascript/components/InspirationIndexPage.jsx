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
        <div className="BigList">
        {/* <div className="d-flex flex-row flex-nowrap"> */}
   
      
            <ul>
              {inspirations.map((inspire, index) => (

                  <div key={index} className="card mt-4">
                    <li key={inspire.id}>
            
                      <a href={inspire.url}>
                        <p className="text-center">
                          {inspire.title}
                        </p>
                      </a>
                      <div className="d-flex justify-content-center">
                      <a href={inspire.url}>
                        <img src={inspire.image_url} />
                      </a>
                      </div>

                      <div className="d-flex justify-content-center">
                        <ul>
                        {inspire.hexes.map((hex, i) => (
                            <li key={index+i}>
                              {hex.code}
                            </li>
                        ))}
                        </ul>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button 
                          className="btn btn-outline-dark btn-block"
                          data-id={inspire.id} 
                          onClick={this.deleteInspiration}
                        >
                          Delete
                        </button>
                      </div>
                    </li>

                  </div>
    
              ))}
            </ul>

          
        </div>
      </div>
    );
  }
}

export default InspirationIndexPage;
