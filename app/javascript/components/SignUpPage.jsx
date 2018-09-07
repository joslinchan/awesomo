import React, { Component } from "react";
import Session from "../requests/session";
import User from "../requests/user";

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: undefined,
    }

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);

    User.create({
      user: {
        first_name: formData.get("firstName"),
        last_name: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirmation: formData.get("confirmPassword"),
      }
    })
    .then(data => {
      if (data.status === 422) {
        this.setState({
          validationErrors: data.errors
        });
      } else {
        Session.create({
          email: formData.get("email"),
          password: formData.get("password")
        })
        .then(() => {
            const {onSignIn = () => {}} = this.props;
            onSignIn();
            window.location.replace('/inspirations/search');
          }
        ); 
      }
    })
  }
  
  render() {
    const {errorMessage} = this.state;

    return (
      <main className="container mt-4">
        <div className="logo">
        </div>
        <form onSubmit={this.createSession}>
          <div>
            <input 
              type="text"
              name="firstName" 
              id="firstName" 
              placeholder= "First Name" 
              className="form-control underline search"
            />
            <small>
              {errorMessage ? <p className="error ml-3">{errorMessage}</p> : <p className="noerror">howdy</p>}
            </small>
          </div>

          <div>
            <input 
              type="text"
              name="lastName" 
              id="lastName" 
              placeholder= "Last Name" 
              className="form-control mt-3 underline search"
            />
            <small>
              {errorMessage ? <p className="error ml-3">{errorMessage}</p> : <p className="noerror">howdy</p>}
            </small>
          </div>

          <div>
            <input 
              type="text"
              name="email" 
              id="email" 
              placeholder= "Email" 
              className="form-control mt-3 underline search"
            />
            <small>
              {errorMessage ? <p className="error ml-3">{errorMessage}</p> : <p className="noerror">howdy</p>}
            </small>
          </div>

          <div>
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

          <div>
            <input 
              type="password" 
              name="confirmPassword" 
              id="confirmPassword" 
              placeholder="Confirm Password" 
              className="form-control mt-3 underline search"
            />
            <small>
              {errorMessage ? <p className="error ml-3">{errorMessage}</p> : <p className="noerror">howdy</p>}
            </small>
          </div>

          <div className="d-flex justify-content-end">
            <input 
              type="submit" 
              value="Sign Up"
              className="btn btn-outline-dark signIn icon"
            />
          </div>
        </form>
      </main>
    )
  }
}

export default SignUpPage;
