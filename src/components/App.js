import React from "react";
import Header from "./Header";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="App bg-gray-900 h-screen">
        <Header />
        <div className="form container px-4 justify-center mx-auto flex flex-col  text-white">
          <LanguageStore>
            <LanguageSelector />

            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </div>
        <p className="mt-10 text-center mx-auto text-white">
          Icons made by <span> </span>
          <a
            href="https://www.flaticon.com/authors/freepik"
            className="text-blue-700"
            title="Freepik"
          >
            Freepik
          </a>
          <span> </span>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </p>
      </div>
    );
  }
}

export default App;
