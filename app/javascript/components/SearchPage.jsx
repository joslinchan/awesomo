import React, {Component}  from "react";
import Search from "../requests/search";

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state ={

    }
  }
  
  render() {
    return(
      <section>
        <form onSubmit={this.createSearch}>
          <div>
            <input name="search" id="search" type="text"/>
          </div>

          <div>
            <input type="submit" value="Search" />
          </div>
        </form>
      </section>
    )
  }
};

export default SearchPage;
