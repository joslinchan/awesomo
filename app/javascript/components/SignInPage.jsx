import React, {Component} from "react";
import Session from "../requests/session";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: undefined
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);

    Session.create({
      email: formData.get("email"),
      password: formData.get("password")
    })
    .then(data => {
      if(data.status === 404) {
        this.setState({
          errorMessage: "Invalid email or password"
        });
      } else {
        const {onSignIn = () => {}} = this.props;
        onSignIn();
        /* console.log(this.props.history); */
        this.props.history.push("/");
      }
    });
  }

  render() {
    const {errorMessage} = this.state;
    return(
      <main className="container">
        <h2>Sign In</h2>
        <form onSubmit={this.createSession}>
          <div>
            {/* <label htmlFor="email">Email</label><br /> */}
            <input 
              type="text"
              name="email" 
              id="email" 
              placeholder= "Email" 
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
            <input 
              type="submit" 
              value="Sign In"
              className="btn btn-outline-dark signIn"
            />
          </div>
        </form>
      </main>
    );
  }
};

export default SignInPage;
