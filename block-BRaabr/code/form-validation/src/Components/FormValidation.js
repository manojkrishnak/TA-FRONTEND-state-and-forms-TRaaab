import React from "react";
import "../App.css";

class FormValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password1: "",
      password2: "",
      errors: {
        username: "",
        email: "",
        password1: "",
        password2: "",
        submitBtn: false
      },
    };
  }

  validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  comparePasswords = (password2) => {
    console.log(this.state.password1 === password2);
    return this.state.password1 === password2;
  };

  handleChange = (e) => {
    const name = e.target.name; //Key
    const value = e.target.value; //Value
    switch (name) {
      case "email":
        this.state.errors.email = this.validateEmail(value)
          ? ""
          : "Email is invalid";
        break;
      case "password1":
        this.state.errors.password1 =
          this.state.password1.length < 6
            ? "Password should be minimum of 6 characters"
            : "";
        break;
      case "password2":
        console.log("dejbkd");
        this.state.errors.password2 = this.comparePasswords(value)
          ? ""
          : "Both the Passwords does not match. Please re-enter passwords";
        break;
      default:
        break;
    }
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password1, password2 } = this.state.errors;
    return (
      <div className="flex col flex-48 form-validation">
        <h2>Register with us</h2>
        <form>
          <div className="item">
            <label>Username</label>
            <input type={"text"} name="username" placeholder="Enter Username" />
          </div>
          <div className="item">
            <label>Email</label>
            <input
              type={"email"}
              name="email"
              placeholder="Enter email"
              className={email && "error"}
              onChange={this.handleChange}
            />
          </div>
          <span>{email}</span>
          <div className="item">
            <label>Password</label>
            <input
              type={"password"}
              name="password1"
              placeholder="Enter password"
              className={password1 && "error"}
              onChange={this.handleChange}
            />
          </div>
          <span>{password1}</span>
          <div className="item">
            <label>Confirm Password</label>
            <input
              type={"password"}
              name="password2"
              placeholder="Enter password"
              className={password2 && "error"}
              onChange={this.handleChange}
            />
          </div>
          <span>{password2}</span>
          <div className="item">
            <button
              className="submit-btn"
              disabled={(email || password1 || password2) ? false : true}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormValidation;
