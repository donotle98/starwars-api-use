import React, { Component } from "react";
import "../assets/Form.scss";

class Form extends Component {
  state = {
    name: "",
  };
  handleNameChange = (e) => {
    let name = e.target.value;
    console.log(name);
    this.setState({ name: name });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getCharacters(this.state.name);
  };
  render() {
    return (
      <main>
        <input className="c-checkbox" type="checkbox" id="checkbox"></input>
        <div className="c-formContainer">
          <form className="c-form" action="">
            <input
              className="c-form__input"
              placeholder="Name of character?"
              required
              onChange={this.handleNameChange}
            ></input>
            <label className="c-form__buttonLabel" for="checkbox">
              <button
                className="c-form__button"
                type="button"
                onClick={this.handleSubmit}
              >
                Search
              </button>
            </label>
            <label
              className="c-form__toggle"
              for="checkbox"
              data-title="Search Name"
            ></label>
          </form>
        </div>
      </main>
    );
  }
}

export default Form;
