import React, {Component}  from "react";
import InspirationApi from "../requests/inspiration";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: undefined
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  handleInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  enterSubmit(event) {
    event.preventDefault();
    const {currentTarget} = event; //const currentTarget = event.currentTarget
    //console.log(currentTarget);
    const { term } = this.state;   // const term = this.state.term;

    InspirationApi.search(term)
    .then(searches => {
      this.setState({searches: searches});
    })
  }

  render() {

    return(
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
    )
  }
};

export default SearchBar;
