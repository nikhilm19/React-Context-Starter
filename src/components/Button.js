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
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  renderSubmit = (value) => {
    return value === "ENGLISH" ? "SUBMIT" : "Voorleggen";
  };
  render() {
    console.log(this.context);

    return (
      <div>
        <ColorContext.Consumer>
          {(color) => this.renderButton(color)}
        </ColorContext.Consumer>
      </div>
    );
  }
}

export default Button;
