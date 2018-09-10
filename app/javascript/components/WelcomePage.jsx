import React, {Component} from "react";

class WelcomePage extends Component {
  render() {
    return(
      <main>
        <a href="/inspirations/search">
          <div className="logo">
          </div>
        </a>
        <hr />
        <h2>A mini search engine for your inspirational needs</h2>
        <div className="p">Finally, you don't have to waste time looking for design assets.<br /> Just type in a search term and have colour swatches, palettes, patterns, and high resolution photos delivered to you instantly.</div>
        <hr />

        <div className="container welcome">
 
          <h1>
            <div className="circle">
            <i className="fas fa-lemon welcome"></i>
            </div>
          </h1>
          <h4>Easy peasy, lemon-squeezy</h4>
          <p className="welcome">
            Working on an app and need some cat images? Just type in "cat" in the search bar. Pick a colour scheme for your project while you're at it. This is easier than making lemonade.
          </p>

          <h1>
            <div className="circle">
            <i className="fas fa-search welcome"></i>
            </div>
          </h1>
          <h4>Search by keyword</h4>
          <p className="welcome">
            Yes, it's that simple. No more countless hours of perusing through endless google searches. There are just too many options and distractions out there. You just want to get back to coding. One keyword, one search- Done!
          </p>

          <h1>
            <div className="circle">
            <i className="fas fa-cloud-upload-alt welcome"></i>
            </div>
          </h1>
          <h4>Save attribute</h4>
          <p className="welcome">
            Alien invasion happening while you're in the middle of a search? Don't fret! You can save as many items as you like for later viewing. Even if your computer gets destroyed, your items are stored safely in the cloud.
          </p>

          <h1>
            <div className="circle">
            <i className="fas fa-undo-alt welcome"></i>
            </div>
          </h1>
          <h4>Unsave feature</h4>
          <p className="welcome">
            Changed your mind after saving? We feel ya'! You can unsave a saved item any time. No commitments necessary.
          </p>

          <h1>
            <div className="circle">
            <i className="fas fa-trash welcome"></i>
            </div>
          </h1>
          <h4>Delete ability</h4>
          <p className="welcome">
            The power is in your hands. Don't like an item in your saved collection? Go ahead and delete it. You're the boss.
          </p>

          <h1>
            <div className="circle">
            <i className="fas fa-glasses welcome"></i>
            </div>
          </h1>
          <h4>Sneak peak inside</h4>
          <div className="demo">
          </div>
      
        </div>
      </main>
    )
  }
}

export default WelcomePage;
