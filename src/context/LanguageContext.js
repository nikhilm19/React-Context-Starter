import React from "react";
const Context = React.createContext("dutch");
console.log(Context);

export class LanguageStore extends React.Component {
  state = { language: "ENGLISH", color: "red" };

  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Context;
