import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Home from "./components/Home";

export default class App extends Component {
  state = {
    login: false
  };
  componentDidMount() {
    let data = localStorage.getItem("loginData");

    if (data) {
      this.setState({ login: true });
    }
  }
  onLogin = () => {
    this.setState({ login: true });
  };
  onLogout = () => {
    localStorage.clear();
    this.setState({ login: false });
  };
  render() {
    const { login } = this.state;
    return (
      <div>
        {!login ? (
          <Login onLogin={this.onLogin} />
        ) : (
          <Home onLogout={this.onLogout} />
        )}
        }
      </div>
    );
  }
}
