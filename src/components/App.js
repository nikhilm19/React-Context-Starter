import React from "react";
import Header from "./Header";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class App extends React.Component {
  state = {
    language: "ENGLISH",
    btnColor: "blue",
  };

  changeLanguage = (language, btnColor) => {
    this.setState({ language, btnColor });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="form container px-4 justify-center mx-auto flex flex-col items-center w-6/12">
          <div className="mx-auto">
            <h1 className="text-xl text-blue-500">Select a language</h1>
          </div>
          <div className="flex flex-row mb-8 mt-8 justify-center items-center">
            <i
              className="fas fa-flag-usa fa-2x mr-8 w-10 h-10"
              onClick={() => this.changeLanguage("ENGLISH", "red")}
            ></i>
            <img
              src="/iconfinder_france_5320692.png"
              className="w-10 h-10"
              onClick={() => this.changeLanguage("DUTCH", "blue")}
            ></img>
          </div>

          <LanguageContext.Provider value={this.state.language}>
            <ColorContext.Provider value={this.state.btnColor}>
              <UserCreate />
            </ColorContext.Provider>
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
