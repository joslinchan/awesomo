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
  
  render() {
    return(
      <div className="search">
        <input 
          placeholder="Search for..." 
          name="search" 
          id="search" 
          type="text"
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
};

export default SearchBar;
