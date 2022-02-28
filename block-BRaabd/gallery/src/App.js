import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "basketball",
    };
  }

  handleImageChange = (name) => {
    this.setState({
      active: name
    })
  }

  render() {
    const label = ["basketball", "cricket", "laptop", "phone", "pubg", "tiger"];
    return (
      <>
        <div className="container">
          <div className="btns">
            {label.map((label, i) => (
              <button key={i} onClick={() => this.handleImageChange(label)} className={this.state.active === label ? "active": ""}>{label}</button>
            ))}
          </div>
          <img
            className="img"
            src={"./" + this.state.active + ".jpg"}
            alt={this.state.active}
          />
        </div>
      </>
    );
  }
}

export default App;
