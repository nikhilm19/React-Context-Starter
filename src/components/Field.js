import React from "react";
import LanguageContext from "../context/LanguageContext";
class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === "ENGLISH" ? "Name" : "Naam";
    return (
      <div className="mb-4">
        <label className="mr-4">{text}</label>
        <input className="p-2 border border-blue-200 rounded"></input>
      </div>
    );
  }
}

export default Field;
