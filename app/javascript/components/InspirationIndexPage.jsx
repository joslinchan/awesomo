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
          <h2 className="load">Loading Inspirations...</h2>
        </main>
      );
    }

    return(
      <div className="container mt-4">
      
      <div id="box">
     
          {inspirations.map((inspire, index) => (
      
            <div key={inspire.id}  >
              <div className="card">
    
                <a href={inspire.url}>
                  <h5 className="text-center leftright mb-2">
                    {inspire.title}
                  </h5>
                </a>

                <div 
                  className="d-flex justify-content-center"
                >
                  <a href={inspire.url}>
                    <img src={inspire.image_url} className="leftright image" />
                  </a>
                </div>

                <div 
                  className="d-flex justify-content-center hex mt-2 mb-2"
                >
                  <ul>
                    {inspire.hexes.map((hex, i) => (
                      <li key={index+i}>
                        #{hex.code}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="btn btn-outline-dark btn-block delete"
                  data-id={inspire.id} 
                  onClick={this.deleteInspiration}
                >
                  <i className="fas fa-trash"></i>
                </button>
                
              </div>
            </div>  

          ))}
       
        
        </div>
      </div>
    );
  }
}

export default InspirationIndexPage;
