import React from 'react';

const WelcomePage = {
  render() {
    return (
      <main>
        <a href="/inspirations/search">
          <div className="logo" />
        </a>
        <hr />
        <h2>A mini search engine for your inspirational needs</h2>
        <div className="p">
          Finally, you don&apos;t have to waste time looking for design assets.
          <br />
          {' '}
          Just type in a search term and have colour swatches, palettes, patterns, and high resolution photos delivered to you instantly.
        </div>
        <hr />

        <div className="container welcome">

          <h1>
            <div className="circle">
              <i className="fas fa-lemon welcome" />
            </div>
          </h1>
          <h4>Easy peasy, lemon-squeezy</h4>
          <p className="welcome">
            Working on an app and need some cat images? Just type in &ldquo;cat&rdquo; in the search bar. Pick a colour scheme for your project while you&apos;re at it. This is easier than making lemonade.
          </p>

          <h1>
            <div className="circle">
              <i className="fas fa-search welcome" />
            </div>
          </h1>
          <h4>Search by keyword</h4>
          <p className="welcome">
            Yes, it&apos;s that simple. No more countless hours of perusing through endless google searches. There are just too many options and distractions out there. You just want to get back to coding. One keyword, one search- Done!
          </p>

          <h1>
            <div className="circle">
              <i className="fas fa-cloud-upload-alt welcome" />
            </div>
          </h1>
          <h4>Save attribute</h4>
          <p className="welcome">
            Alien invasion happening while you&apos;re in the middle of a search? Don&apos;t fret! You can save as many items as you like for later viewing. Even if your computer gets destroyed, your items are stored safely in the cloud.
          </p>

          <h1>
            <div className="circle">
              <i className="fas fa-undo-alt welcome" />
            </div>
          </h1>
          <h4>Unsave feature</h4>
          <p className="welcome">
            Changed your mind after saving? We feel ya&apos;! You can unsave a saved item any time. No commitments necessary.
          </p>

          <h1>
            <div className="circle">
              <i className="fas fa-trash welcome" />
            </div>
          </h1>
          <h4>Delete ability</h4>
          <p className="welcome">
            The power is in your hands. Don&apos;t like an item in your saved collection? Go ahead and delete it. You&apos;re the boss.
          </p>

          <h1>
            <div className="circle">
              <i className="fas fa-glasses welcome" />
            </div>
          </h1>
          <h4>Sneak peak inside</h4>
          <div className="demo" />

        </div>
      </main>
    );
  },
};

export default WelcomePage;
