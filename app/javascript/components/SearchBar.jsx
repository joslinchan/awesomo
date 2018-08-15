import React, {Component}  from "react";


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state ={
      term: undefined
    }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  handleInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }
  
  render() {

    return(
      <main>
        <form onSubmit={this.createSearch}>
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
