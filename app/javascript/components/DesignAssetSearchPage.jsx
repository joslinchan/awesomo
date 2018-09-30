import React, { Component } from 'react';
import shuffle from 'lodash/shuffle';
import InspirationRailsApi from '../requests/inspiration';
import DesignAssetSearchDetails from './DesignAssetSearchDetails';
import Tippy from './ReactTippy';

class DesignAssetSearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      fetchedDesignAssets: [],
      term: '',
      errorMessage: '',
    };
  }

  onInputChange = (term) => {
    this.setState({ term });
  }

  enterSubmit = (event) => {
    event.preventDefault();
    /* const { currentTarget } = event; */
    const { term } = this.state;

    this.setState({
      fetchedDesignAssets: [],
      errorMessage: '',
      loading: true,
    });

    InspirationRailsApi.search(term)
      .then((fetchedDesignAssets) => {
        if (fetchedDesignAssets.status === 404) {
          return this.setState({
            errorMessage: 'No results found',
            loading: false,
          });
        }

        const shuffledDesignAssets = shuffle(Array.from(fetchedDesignAssets));
        return this.setState({
          fetchedDesignAssets: shuffledDesignAssets,
          loading: false,
        });
      });
  };

  render() {
    const { errorMessage, loading, fetchedDesignAssets } = this.state;

    return (
      <main className="container">

        <div className="logo" />

        <form onSubmit={this.enterSubmit}>
          <div>
            <Tippy
              duration={200}
              delay={50}
              arrow
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
              arrow
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
              arrow
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
          {loading ? (
            <h3 className="load">Loading...</h3>
          ) : (
            <div id="box">
              {fetchedDesignAssets.map(designAsset => (
                <div key={designAsset.url}>
                  <DesignAssetSearchDetails {...designAsset} />
                </div>
              ))}
            </div>
          )}
        </section>

      </main>
    );
  }
}

export default DesignAssetSearchPage;
