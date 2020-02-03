import React, { Component, createContext } from "react";

export const AuthContext = createContext();
class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  };

  HandleAuth = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated
    });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, ToogleAuth: this.HandleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
