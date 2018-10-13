import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InspirationApi from '../requests/inspiration';

class SearchBar extends Component {
  state = {
    term: undefined,
  };

  onInputChange = ({ term }) => {
    this.setState({ term });
    this.onTermChange(term);
  }

  handleInputChange = ({ term }) => {
    this.setState({ term });
    this.onTermChange(term);
  }

  enterSubmit = (event) => {
    event.preventDefault();
    const { currentTarget } = event; // const currentTarget = event.currentTarget
    // console.log(currentTarget);
    const { term } = this.state; // const term = this.state.term;

    InspirationApi.search(term)
      .then((searches) => {
        this.setState({ searches });
      });
  }

  render() {
    return (
      <main>
        <form onSubmit={this.enterSubmit}>
          <div>
            <input
              placeholder="Search for..."
              name="query"
              id="query"
              type="text"
              onChange={event => this.onInputChange(event.target.value)}
            />
          </div>

          <div>
            <input type="submit" value="Search" />
          </div>
        </form>

      </main>
    );
  }
}

SearchBar.propTypes = {
  onTermChange: PropTypes.func.isRequired,
};

export default SearchBar;
