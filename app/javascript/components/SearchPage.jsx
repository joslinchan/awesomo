import React, { Component } from 'react';
import SearchBar from './SearchBar';

class SearchPage extends Component {
  handleTermChange = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} {...this.props} />
      </div>
    );
  }
}

export default SearchPage;
