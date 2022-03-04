import React from "react";
import Item from "./Item";
import data from "./data.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: "",
    };
  }

  handleFilter = (filterCat) => {    
    this.setState({
      activeFilter: filterCat,
    });
  };

  render() {
    let menu= "";
    if(this.state.activeFilter !== ""){
       menu = data.filter(item => this.state.activeFilter.toLowerCase() === item.category)  
    }
    
    if(this.state.activeFilter === "All" || this.state.activeFilter === ""){
      menu = data
    }

    console.log(menu)
    return (
      <div className="App">
        <h1 className="main-heading">Our Menu</h1>
        <hr className="hr-heading" />
        <div className="tags">
          {["All", "Breakfast", "Lunch", "Shakes"].map((tag) => (
            <a key={tag} className={this.state.activeFilter === tag? "active": ""} onClick={() => this.handleFilter(tag)} href="#">
              {tag}
            </a>
          ))}
        </div>
        <Item menu={menu} />
      </div>
    );
  }
}

export default App;
