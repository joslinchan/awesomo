import React, { Component } from "react";
import Session from "../requests/session";
import User from "../requests/user";
import Tippy from './ReactTippy';
import {Redirect} from "react-router-dom";

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailErrorMessage: undefined,
      fNameErrorMessage: undefined,
      lNameErrorMessage: undefined,
      passwordErrorMessage: undefined,
      passwordConfirmErrorMessage: undefined,
      toSearch: false,
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
        password_confirmation: formData.get("password_confirmation"),
      }
    })
    .then(data => {
      if (data.status === 422) {
        console.log(data)
        this.setState({
          fNameErrorMessage: data.errors.first_name,
          lNameErrorMessage: data.errors.last_name,
          emailErrorMessage: Array.isArray(data.errors.email) ? data.errors.email.join(", ") : data.errors.email,
          passwordErrorMessage: data.errors.password,
          passwordConfirmErrorMessage: data.errors.password_confirmation,
        });
      } else {
        Session.create({
          email: formData.get("email"),
          password: formData.get("password")
        })
        .then(() => {
            const {onSignIn = () => {}} = this.props;
            onSignIn()
            .then(() => this.setState(() => ({
              toSearch: true
            })))
          }
        ); 
      }
    })
  }
  
  render() {
    const {
      emailErrorMessage, 
      fNameErrorMessage, 
      lNameErrorMessage,
      passwordErrorMessage,
      passwordConfirmErrorMessage,
    } = this.state;

    if(this.state.toSearch === true) {
      return <Redirect to='/inspirations/search' />
    }

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
              className="form-control mt-3 underline search"
            />
            <small>
              {fNameErrorMessage ? <p className="error ml-3">{fNameErrorMessage}</p> : <p className="noerror">howdy</p>}
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
              {lNameErrorMessage ? <p className="error ml-3">{lNameErrorMessage}</p> : <p className="noerror">howdy</p>}
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
              {emailErrorMessage ? <p className="error ml-3">{emailErrorMessage}</p> : <p className="noerror">howdy</p>}
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
              {passwordErrorMessage ? <p className="error ml-3">{passwordErrorMessage}</p> : <p className="noerror">howdy</p>}
            </small>
          </div>

          <div>
            <input 
              type="password" 
              name="password_confirmation" 
              id="password_confirmation" 
              placeholder="Confirm Password" 
              className="form-control mt-3 underline search"
            />
            <small>
              {passwordConfirmErrorMessage ? <p className="error ml-3">{passwordConfirmErrorMessage}</p> : <p className="noerror">howdy</p>}
            </small>
          </div>

          <div className="d-flex justify-content-end">
            <Tippy duration={200} delay={50} arrow={true} arrowType="round" animation="scale">
              <input 
                type="submit" 
                value="Sign Up"
                className="btn btn-outline-dark signIn"
                title="✨Let's go!"
              />
            </Tippy>
          </div>
          
        </form>
      </main>
    )
  }
}

export default SignUpPage;
