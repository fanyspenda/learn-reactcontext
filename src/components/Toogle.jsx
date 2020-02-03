import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Toogle extends Component {
  static contextType = ThemeContext;
  render() {
    const { ToogleTheme } = this.context;
    return <button onClick={ToogleTheme}>Change Theme</button>;
  }
}

export default Toogle;
