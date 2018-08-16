import React, {Component} from "react";
import InspirationApi from "../requests/inspiration";
import shuffle from "lodash/shuffle";


class InspirationSearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //loading: true,
      searches: [],
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
    .then(searches => {
      const collected = shuffle(Array.from(searches))
      this.setState({ searches: collected });
      console.log(searches);
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
    const {searches} = this.state;

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
              {searches.map((search, index) => (
                <li key={index}>
                  <div className="insideList"> 
                    {search.title ? (
                      <a href= {search.url}>
                        {search.title}
                      </a>
                    ) : (
                      <a href= {search.attributes.table.links.html}>
                        Untitled
                      </a>
                    )}
                    <br />
                    {search.imageUrl ? (
                      <a href= {search.url}>
                        <img src={search.imageUrl} />
                      </a> 
                    ) : ( 
                      <a href= {search.attributes.table.links.html}>
                        <img src={search.attributes.table.urls.thumb} />
                      </a>
                    )}
                    <br />
                    <ul>
                      {search.colors && search.colors.hex.map((hex, i) => (
                        <li key={hex+i}>
                          #{hex}
                        </li>
                      ))}
                      {search.hex && <li>#{search.hex}</li>}
                      {search.attributes && <li>{search.attributes.table.color}</li>}
                    </ul>
                      <button onClick={() => this.save(search.attributes ? search.attributes.table.save_link : search.save_link)}>Save</button>
                    
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
