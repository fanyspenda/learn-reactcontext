import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {themeContext => (
          <AuthContext.Consumer>
            {AuthContext => {
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>React Context</h1>
                  <div onClick={AuthContext.ToogleAuth}>
                    {AuthContext.isAuthenticated ? "Logged in" : "Logged Out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                  </ul>
                </nav>
              );
            }}
          </AuthContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
