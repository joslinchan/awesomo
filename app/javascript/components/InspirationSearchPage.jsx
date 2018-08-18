import React, {Component} from "react";
import InspirationApi from "../requests/inspiration";
import shuffle from "lodash/shuffle";
import InspirationSearchDetails from "./InspirationSearchDetails";


class InspirationSearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      everything: [],
      term: ""
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: false, everything: [] });
  }

  onInputChange(term) {
    this.setState({term});
    console.log(term);
  }

  enterSubmit(event) {
    event.preventDefault();
    const {currentTarget} = event; //const currentTarget = event.currentTarget
    //console.log(currentTarget);
    const { term } = this.state;   // const term = this.state.term;

    InspirationApi.search(term)
    .then(everything => {
      const collected = shuffle(Array.from(everything))
      this.setState({ everything: collected });
      // console.log(collected);
    })
/*     .catch(() => {
      this.setState({loading: false});
    }); */
  }


  render() {
    const {loading, everything} = this.state;

    if (loading) {
      return (
        <main>
          <h2>Loading searches...</h2>
        </main>
      );
    }

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

        <section className="bigList">
          <ul>
          {everything.map((thing, index) => (
            <li key={index}>
            <InspirationSearchDetails {...thing} />
            </li>
          ))}
          </ul> 
        </section>
      </main>
    )
  }
}

export default InspirationSearchPage;
