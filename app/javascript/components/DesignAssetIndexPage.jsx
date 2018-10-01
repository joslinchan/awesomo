import React, { Component } from 'react';
import InspirationRailsApi from '../requests/inspiration';
import Tippy from './ReactTippy';

class DesignAssetIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      designAssets: [],
    };
  }

  componentDidMount() {
    InspirationRailsApi.all()
      .then((designAssets) => {
        this.setState({
          loading: false,
          designAssets,
        });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  deleteDesignAsset = (event) => {
    const { currentTarget } = event;
    const designAssetId = parseInt(currentTarget.dataset.id, 10);
    const { designAssets } = this.state;

    this.setState({
      designAssets: designAssets.filter(designAsset => designAsset.id !== designAssetId),
    });

    InspirationRailsApi.destroy(designAssetId);
  }

  render() {
    const { loading, designAssets } = this.state;

    if (loading) {
      return (
        <main>
          <h2 className="load">Loading inspirations...</h2>
        </main>
      );
    }

    return (
      <div className="container mt-4">

        {designAssets.length === 0 ? (
          <h5 className="text">
            There are no items in your collection right now.
            <br />
            To add items, search for items by keyword in the search bar and click save.
            <br />
            =)
          </h5>
        ) : (
          <div id="box">
            {designAssets.map(designAsset => (

              <div key={designAsset.id}>
                <div className="card">

                  <a href={designAsset.url}>
                    <h5 className="text-center leftright mb-2">
                      {designAsset.title}
                    </h5>
                  </a>

                  <div className="d-flex justify-content-center">
                    <a href={designAsset.url}>
                      <img
                        alt=""
                        src={designAsset.image_url}
                        className="leftright image"
                      />
                    </a>
                  </div>

                  <div className="d-flex justify-content-center hex mt-2 mb-2">
                    <ul>
                      {designAsset.hexes.map(hex => (
                        <li key={hex}>
                          {hex.code.includes('#') ? (
                            <span id="hex-line">
                              {hex.code}
                              <div
                                id="colour-box"
                                style={{ backgroundColor: hex.code }}
                              />
                            </span>
                          ) : (
                            <span id="hex-line">
                              #
                              {hex.code}
                              <div
                                id="colour-box"
                                style={{ backgroundColor: `#${hex.code}` }}
                              />
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Tippy
                    duration={200}
                    delay={50}
                    arrow
                    arrowType="round"
                    animation="scale"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-block delete"
                      title="Delete"
                      data-id={designAsset.id}
                      onClick={this.deleteDesignAsset}
                    >
                      <i className="fas fa-trash" />
                    </button>
                  </Tippy>

                </div>
              </div>

            ))}
          </div>
        )}

      </div>
    );
  }
}

export default DesignAssetIndexPage;
