import React from "react";
import MovieItem from "./Components/MovieItem";
import data from "./data.json";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active:  ""
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <div className="movies flex wrap">
          <MovieItem movies={data} />
        </div>
      </div>
    );
  }
}

export default App;
