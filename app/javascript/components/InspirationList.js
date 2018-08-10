import React, {Component} from "react";

class InspirationList extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  
  render() {
    return(
      <div className="InspirationList">
        <h1>Inspirations</h1>
        <ul>
        </ul>
      </div>
    );
  }
}

export default InspirationList;
