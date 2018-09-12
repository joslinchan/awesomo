import React, { Component } from "react";
import InspirationRailsApi from "../requests/inspiration";
import DesignAssetSearchDetails from "./DesignAssetSearchDetails";
import Tippy from "./ReactTippy";
import shuffle from "lodash/shuffle";

class DesignAssetSearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      fetched_design_assets: [],
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

    this.setState({ fetched_design_assets: [], errorMessage: "", loading: true })

    InspirationRailsApi.search(term)
    .then(fetched_design_assets => {
      if (fetched_design_assets.status === 404) {
        return this.setState({
          errorMessage: "No results found",
          loading: false,
        });
      };

      const shuffledDesignAssets = shuffle(Array.from(fetched_design_assets));
      return this.setState({ 
        fetched_design_assets: shuffledDesignAssets,
        loading: false,
      });
    });
  };

  render() {
    const { errorMessage, loading, fetched_design_assets } = this.state;

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
                className="form-control underline search"
                placeholder="Search for..." 
                name="query" 
                id="query" 
                type="text"
                title="Enter a search term!"
                onChange={event => this.onInputChange(event.target.value)}
              />
            </Tippy>
          </div>

          <div className="search-buttons">
            <Tippy 
              duration={200} 
              delay={50} 
              arrow={true} 
              arrowType="round" 
              animation="scale"
            >
              <input 
                className="btn btn-outline-dark search icon"
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
                className="btn btn-outline-dark lucky search"
                type="submit" 
                value="I'm Feeling Lucky" 
                title="Find me something random!"
              />
            </Tippy>
          </div>
        </form>

        <section className="design-asset-list">
          {errorMessage ? <h3>{errorMessage}</h3> : null }
          {loading ? <h3 className="load">Loading...</h3> : (
            <div id="box">
              {fetched_design_assets.map((design_asset, index) => (
                <div key={index}>
                  <DesignAssetSearchDetails {...design_asset} />
                </div>
              ))}
            </div> 
          )}
        </section>

      </main>
    );
  };
};

export default DesignAssetSearchPage;
