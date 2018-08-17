import React, {Component} from "react";

class InspirationDetails extends Component {
  constructor(props) {
    super(props);

     this.state = {
      //loading: true,
      thing: props,
      highlighted: false
    }
    console.log(this.state);

    //this.save = this.save.bind(this);
    //this.toggleHighlighted = this.toggleHighlighted.bind(this);
  }

/*   toggleHighlighted() {
    this.setState({
      highlighted: !this.state.highlighted
    });
  } */

  save(url, id) {
    const {thing} = this.state;
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(data => {
      if (data.status === 200) {
        // console.log(everything);
        this.setState({
         highlighted: true
        })
      }
    })
    .then(()=> {
      this.toggleHighlighted();
      console.log(everything);
    })
/*     .then(
      res => res.json()
    ); */
  }

  render() {
    const {thing} = this.state;

/*     if (loading) {
      return (
        <main>
          <h2>Loading searches...</h2>
        </main>
      );
    } */


    return(
            <div className={this.state.highlighted ? "highlight card" : "card"}> 
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
                <button onClick={() => thing.save(thing.attributes ? (
                  thing.attributes.table.save_link, thing.attributes.table.id
                ) : (
                  thing.save_link, thing.id
                ))}>Save</button>
              
            </div>

    )
  }
}

export default InspirationDetails;
