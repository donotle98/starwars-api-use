import React, { Component } from "react";
import Header from "./component/header/Header";
import Form from "./component/form/Form";
import Results from "./component/results/Results";
import "./component/assets/App.css";

const BASE_URL = "https://swapi-thinkful.herokuapp.com/api/";

class App extends Component {
  state = {
    character: [],
    searchName: "",
  };

  getCharacters = (name) => {
    fetch(`https://swapi-thinkful.herokuapp.com/api/people/?search=${name}`)
      .then((response) => response.json())
      .then((person) => {
        console.log(person.results);
        this.setState({ character: person.results });
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          handleNameChange={this.handleNameChange}
          getCharacters={this.getCharacters}
        />
        {this.state.character.map((x, y) => (
          <Results
            key={y}
            name={x.name}
            birthYear={x.birth_year}
            eyeColor={x.eye_color}
            skinColor={x.skin_color}
          />
        ))}
      </div>
    );
  }
}

export default App;
