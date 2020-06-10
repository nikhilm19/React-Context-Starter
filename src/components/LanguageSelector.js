import React from "react";
import LanguageContext from "../context/LanguageContext";
class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="mx-auto">
        <div className="mx-auto">
          <h1 className="text-3xl text-indigo-300 ">Select a language</h1>
        </div>
        <div className="flex flex-row mb-8 mt-8 justify-center items-center">
          <i
            className="fas fa-flag-usa fa-2x mr-8 w-10 h-10"
            onClick={() => this.context.onLanguageChange("ENGLISH", "red")}
          ></i>
          <img
            src="/iconfinder_france_5320692.png"
            className="w-10 h-10"
            onClick={() => this.context.onLanguageChange("DUTCH", "blue")}
          ></img>
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
