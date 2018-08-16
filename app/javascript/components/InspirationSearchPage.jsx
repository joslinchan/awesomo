import React, {Component} from "react";
import InspirationApi from "../requests/inspiration";
import shuffle from "lodash/shuffle";


class InspirationSearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //loading: true,
      everything: [],
      term: ""
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
    this.save = this.save.bind(this);
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
      console.log(everything);
    })
/*     .catch(() => {
      this.setState({loading: false});
    }); */
  }

  save(url, id) {
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(
      res => res.json()
    );
  }

  render() {
    const {everything} = this.state;

/*     if (loading) {
      return (
        <main>
          <h2>Loading searches...</h2>
        </main>
      );
    } */

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

        <section className= "bigList">
          <ul>
              {everything.map((thing, index) => (
                <li key={index}>
                  <div className="insideList"> 
                    {thing.title ? (
                      <a href= {thing.url}>
                        {thing.title}
                      </a>
                    ) : (
                      <a href= {thing.attributes.table.links.html}>
                        Untitled
                      </a>
                    )}
                    <br />
                    {thing.imageUrl ? (
                      <a href= {thing.url}>
                        <img src={thing.imageUrl} />
                      </a> 
                    ) : ( 
                      <a href= {thing.attributes.table.links.html}>
                        <img src={thing.attributes.table.urls.thumb} />
                      </a>
                    )}
                    <br />
                    <ul>
                      {thing.colors && thing.colors.hex.map((hex, i) => (
                        <li key={hex+i}>
                          #{hex}
                        </li>
                      ))}
                      {thing.hex && <li>#{thing.hex}</li>}
                      {thing.attributes && <li>{thing.attributes.table.color}</li>}
                    </ul>
                      <button onClick={() => this.save(thing.attributes ? (
                        thing.attributes.table.save_link
                      ) : (
                        thing.save_link
                      ))}>Save</button>
                    
                  </div>
                </li>
              ))}
            </ul> 
        </section>
      </main>
    )
  }
}

export default InspirationSearchPage;
