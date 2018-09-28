import React, { Component } from 'react';
import InspirationRailsApi from '../requests/inspiration';
import Tippy from './ReactTippy';

class DesignAssetSearchDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      designAsset: props,
      highlighted: false,
    };
  }

  /* global fetch */
  save = url => fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((data) => {
      this.setState({
        idForDeletion: data.id,
        highlighted: true,
      });
    })

  delete = () => {
    const { idForDeletion } = this.state;

    InspirationRailsApi.destroy(idForDeletion)
      .then((itemToDelete) => {
        if (itemToDelete.status === 200) {
          this.setState({
            highlighted: false,
          });
        }
      });
  }

  render() {
    const { designAsset, highlighted } = this.state;

    return (
      <div
        className={highlighted ? (
          'highlight card'
        ) : (
          'card'
        )}
      >

        <div className="center-content">
          {designAsset.title ? (
            <a href={designAsset.url}>
              <h5 className="text-center leftright mb-2">
                {designAsset.title}
              </h5>
            </a>
          ) : (
            <a href={designAsset.attributes.table.links.html}>
              <h5 className="leftright mb-2">
                Untitled
              </h5>
            </a>
          )}
        </div>

        <div className="center-content">
          {designAsset.imageUrl ? (
            <a href={designAsset.url}>
              <img
                alt=""
                src={
                  designAsset.imageUrl.includes('amazonaws') ? (
                    designAsset.imageUrl
                  ) : (
                    designAsset.imageUrl.replace('http', 'https')
                  )
                }
                className="leftright mb-2"
              />
            </a>
          ) : (
            <a href={designAsset.attributes.table.links.html}>
              <img
                alt=""
                src={designAsset.attributes.table.urls.thumb}
                className="leftright mb-2"
              />
            </a>
          )}
        </div>

        <div className="center-content mb-2">
          <ul>
            {designAsset.colors && designAsset.colors.hex.map(hex => (
              <li key={hex}>
                <span id="hex-line">
                  #
                  {hex}
                  <div
                    id="colour-box"
                    style={{ backgroundColor: `#${hex}` }}
                  />
                </span>
              </li>
            ))}
            {designAsset.hex && (
              <li>
                <span id="hex-line">
                  #
                  {designAsset.hex}
                  <div
                    id="colour-box"
                    style={{ backgroundColor: `#${designAsset.hex}` }}
                  />
                </span>
              </li>
            )}
            {designAsset.attributes && (
              <li>
                <span id="hex-line">
                  {designAsset.attributes.table.color}
                  <div
                    id="colour-box"
                    style={{ backgroundColor: designAsset.attributes.table.color }}
                  />
                </span>
              </li>
            )}
          </ul>
        </div>

        <div className="center-content">
          {highlighted ? (
            <Tippy
              duration={200}
              delay={50}
              arrow
              arrowType="round"
              animation="scale"
            >
              <button
                type="button"
                className="btn btn-outline-dark btn-block"
                title="Unsave item"
                onClick={this.delete}
              >
                <i className="fas fa-heart" />
              </button>
            </Tippy>
          ) : (
            <Tippy
              duration={200}
              delay={50}
              arrow
              arrowType="round"
              animation="scale"
            >
              <button
                type="button"
                className="btn btn-outline-dark btn-block"
                title="Save item"
                onClick={() => this.save(designAsset.attributes ? (
                  designAsset.attributes.table.save_link
                ) : (
                  designAsset.save_link
                ))}
              >
                <i className="far fa-heart" />
              </button>
            </Tippy>
          )}
        </div>

      </div>
    );
  }
}

export default DesignAssetSearchDetails;
