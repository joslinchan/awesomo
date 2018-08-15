import React, {Component} from "react";
import SearchBar from "./SearchBar";


class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return(
      <div>
        <SearchBar onTermChange={this.handleTermChange} {...this.props}/>
      </div>
    )
  }
}

export default SearchPage;
