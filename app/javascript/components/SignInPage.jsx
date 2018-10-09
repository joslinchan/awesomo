import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Session from '../requests/session';
import Tippy from './ReactTippy';

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: undefined,
      toSearch: false,
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget } = event;


    const formData = new FormData(currentTarget);

    Session.create({
      email: formData.get('email'),
      password: formData.get('password'),
    })
      .then((data) => {
        if (data.status === 404) {
          this.setState({
            errorMessage: 'Invalid email or password',
          });
        } else {
          const { onSignIn = () => {} } = this.props;
          onSignIn()
            .then(() => this.setState(() => ({
              toSearch: true,
            })));
          /* console.log(this.props.history); */
          /* this.props.history.push("/"); */
          /* window.location.replace('/inspirations/search'); */
        }
      });
  }

  render() {
    const { errorMessage, toSearch } = this.state;
    if (toSearch === true) {
      return <Redirect to="/inspirations/search" />;
    }
    return (
      <main className="container mt-4">
        <div className="logo" />
        <form onSubmit={this.createSession}>
          <div>
            {/* <label htmlFor="email">Email</label><br /> */}
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control underline search"
            />
            <small>
              {errorMessage ? <p className="error ml-3">{errorMessage}</p> : <p className="noerror">howdy</p>}
            </small>
          </div>

          <div>
            {/* <label htmlFor="password">Password</label><br /> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control mt-3 underline search"
            />
            <small>
              {errorMessage ? <p className="error ml-3">{errorMessage}</p> : <p className="noerror">howdy</p>}
            </small>
          </div>

          <div className="d-flex justify-content-end">
            <Tippy duration={200} delay={50} arrow arrowType="round" animation="scale">
              <input
                type="submit"
                value="&#xf2f6;"
                className="btn btn-outline-dark signIn icon"
                title="✨Sign me in!"
              />
            </Tippy>
          </div>

        </form>
      </main>
    );
  }
}

SignInPage.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default SignInPage;
