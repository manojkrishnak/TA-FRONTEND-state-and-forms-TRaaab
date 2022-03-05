import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App flex justify-ct flex-48 col border-right">
        <h1>Multiple Input Form</h1>
        <form>
          <div className="item">
            <label htmlFor="text-1">Text Input</label>
            <input type={"text"} id="text-1" />
          </div>

          <div className="item">
            <label htmlFor="date">Date Input</label>
            <input type={"date"} id="date" />
          </div>

          <div className="item">
            <label htmlFor="file">File Input</label>
            <input type={"file"} id="file" />
          </div>

          <div className="item">
            <label htmlFor="readOnly">ReadOnly Input</label>
            <input type={"text"} id="readOnly"  readOnly placeholder="This can only be copied"/>
          </div>

          <div className="item">
            <label htmlFor="disabled">Disabled Input</label>
            <input type={"text"} id="disabled"  disabled />
          </div>

          <div className="item">
            <label htmlFor="textarea">Textarea Input</label>
            <textarea id="textarea"/>
          </div>

          <div className="item">
            <label htmlFor="textarea">Textarea Input</label>
            <textarea disabled/>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
