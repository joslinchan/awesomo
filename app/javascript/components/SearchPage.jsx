import React, {Component} from "react";
import SearchBar from "./SearchBar";
import Inspiration from "../requests/inspiration";


class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //loading: true,
      searches: []
    }

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    console.log(term);

    // console.table(searches);
  }

/*   Inspiration.search(term)
  .then(searches => {
    this.setState({searches: searches});
  }) */

  render() {
    //const {searches} = this.state;

    return(
      <div>
        <SearchBar onTermChange={this.handleTermChange} {...this.props}/>

{/*         <ul>
          {searches.map((search, index) => (
            <li key={search.id}>
              <p>
                {search.title}
              </p>
            </li>
          ))}
        </ul> */}
      </div>
    )
  }
}

export default SearchPage;
