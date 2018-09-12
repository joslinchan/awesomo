import React, { Component } from "react";
import InspirationApi from "../requests/inspiration";
import InspirationSearchDetails from "./InspirationSearchDetails";
import Tippy from './ReactTippy';
import shuffle from "lodash/shuffle";

class InspirationSearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      everything: [],
      term: "",
      errorMessage: "",
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }

  onInputChange(term) {
    this.setState({ term });
  }

  enterSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const { term } = this.state;  

    this.setState({ everything: [], errorMessage: "", loading: true })

    InspirationApi.search(term)
    .then(everything => {
      if (everything.status === 404) {
        return this.setState({
          errorMessage: "No results found",
          loading: false,
        });
      } 

      const collected = shuffle(Array.from(everything));
      return this.setState({ 
        everything: collected,
        loading: false,
      });
    });
  };

  render() {
    const { errorMessage, loading, everything } = this.state;

    return(
      <main className="container">

        <div className="logo">
        </div>

        <form onSubmit={this.enterSubmit}>
          <div>
            <Tippy 
              duration={200} 
              delay={50} 
              arrow={true} 
              arrowType="round" 
              animation="scale"
            >
              <input 
                className="form-control underline mt-4 search"
                placeholder="Search for..." 
                name="query" 
                id="query" 
                type="text"
                title="Enter a search term!"
                onChange={event => this.onInputChange(event.target.value)}
              />
            </Tippy>
          </div>

          <div className="d-flex justify-content-end">
            <Tippy 
              duration={200} 
              delay={50} 
              arrow={true} 
              arrowType="round" 
              animation="scale"
            >
              <input 
                className="btn btn-outline-dark mt-3 search icon"
                type="submit" 
                value="&#xf002;" 
                title="✨Search!"
              />
            </Tippy>
            <Tippy 
              duration={200} 
              delay={50} 
              arrow={true} 
              arrowType="round" 
              animation="scale"
            >
              <input 
                className="btn btn-outline-dark mt-3 ml-2 search"
                type="submit" 
                value="I'm Feeling Lucky" 
                title="Find me something random!"
              />
            </Tippy>
          </div>
        </form>

        <section className="bigList mt-4">
          {errorMessage ? <h3>{errorMessage}</h3> : null }
          {loading ? <h3 className="load">Loading...</h3> : (
            <div id="box">
              {everything.map((thing, index) => (
                <div key={index}>
                  <InspirationSearchDetails {...thing} />
                </div>
              ))}
            </div> 
          )}
        </section>

      </main>
    );
  };
};

export default InspirationSearchPage;
