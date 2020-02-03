import React, { Component } from "react";
import ThemeContextProvider, { ThemeContext } from "../contexts/ThemeContext";

class Booklist extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ background: theme.bg, color: theme.syntax }}
            >
              <ul>
                <li style={{ background: theme.ui }}>Anna dressed in Blood</li>
                <li style={{ background: theme.ui }}>Sophie's World</li>
                <li style={{ background: theme.ui }}>Shift</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Booklist;
