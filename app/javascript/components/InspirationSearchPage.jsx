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
      term: "",
      boxShowing: false,
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
    const {currentTarget} = event;
    const { term } = this.state;  

    InspirationApi.search(term)
    .then(everything => {
      const collected = shuffle(Array.from(everything))
      this.setState({ 
        everything: collected,
        ...this.state.boxShowing,
       });
 
    })
/*     .catch(() => {
      this.setState({loading: false});
    }); */
  }

  handleBox = (event) => {
    this.setState({boxShowing: !this.state.boxShowing})
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
      <main className="container">
        <div className="logo">
        </div>

        <form onSubmit={this.enterSubmit}>
          <div>
            <input 
              className="form-control underline mt-4 search"
              placeholder="Search for..." 
              name="query" 
              id="query" 
              type="text"
              onChange={event => this.onInputChange(event.target.value)}
            />
          </div>

          <div className="d-flex justify-content-end">
            <input 
              className="btn btn-outline-dark mt-3 search icon"
              type="submit" 
              value="&#xf002;" 
            />
            <input 
              className="btn btn-outline-dark mt-3 ml-2 search"
              type="submit" 
              value="I'm Feeling Lucky" 
            />
          </div>
        </form>

        <section className="bigList mt-4">
          <div id="box">
            {everything.map((thing, index) => (
              <div key={index}>
                <InspirationSearchDetails {...thing} />
              </div>
            ))}
          </div> 
        </section>
      </main>
    )
  }
}

export default InspirationSearchPage;
