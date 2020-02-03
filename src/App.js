import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import Toogle from "./components/Toogle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <Booklist />
            <Toogle />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
