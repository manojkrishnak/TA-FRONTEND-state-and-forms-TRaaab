import React from "react";
import Fonts from "./Components/Fonts";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      size: 16,
    };
  }

  handleChangeinText = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleChangeinFontSize = (e) => {
    this.setState({
      size: e.target.value,
    });
  }

  handleReset = ()=> {
    this.setState({
      message: "",
      size: 16
    })
  }

  render() {
    return (
      <div className="App container">
        <h1>Font Tester</h1>
        <div className="text-input flex justify-bt align-ct">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Type Something..."
            value={this.state.message}
            onChange={this.handleChangeinText}
          />
          <div className="size-block flex justify-ct align-ct">          
            <span>{this.state.size}px</span>
            <input
              type="range"
              defaultValue="16"
              step="1"
              min="11"
              max={"64"}
              name="size"
              id="size"
              onChange={this.handleChangeinFontSize}
            />
          </div>
          <button className="reset-btn" onClick={this.handleReset}>Reset</button>
        </div>
        <div className="all-fonts flex wrap">
          <Fonts
            fontFamilies={[
              "Roboto",
              "Poppins",
              "Hubballi",
              "Fredoka",
              "Lato",
              "Merriweather",
              "Lora",
              "Josefin Sans",
              "Source Code Pro",
            ]}
            message={this.state.message}
            size={this.state.size}
          />
        </div>
      </div>
    );
  }
}

export default App;
