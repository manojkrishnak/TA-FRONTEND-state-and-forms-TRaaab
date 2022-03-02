import React from "react";
import data from "./data.json";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeQuestionId: ""
    }
  }

  handleDisplay = (id) => {
    if(this.state.activeQuestionId === id){
      this.setState({
        activeQuestionId: 0
      })
    }else{
      this.setState({
        activeQuestionId: id
      })
    }
  }


  render() {
    return (
      <>
        <div className="container">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <h3 className="question" onClick={() => this.handleDisplay(item.id)}>
                  {item.name}
                  <span className="expand" >--</span>
                </h3>
                <p className={this.state.activeQuestionId !== item.id ? "none-display answer": "display-answer answer"}>{item.content}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
