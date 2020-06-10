import React from "react";
import LanguageContext from "../context/LanguageContext";

import ColorContext from "../context/ColorContext";
class Button extends React.Component {
  static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button
        className={`bg-${color}-500 p-2 rounded text-white hover:shadow-xl transition ease-in-out duration-300`}
      >
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  renderSubmit = (language) => {
    return language === "ENGLISH" ? "SUBMIT" : "Voorleggen";
  };
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {({ color }) => this.renderButton(color)}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default Button;
