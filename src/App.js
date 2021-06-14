import "./styles.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/index";
import Product from "./pages/product";
import Notfound from "./components/404page";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>
            <Route path="/product" exact>
              <Product />
            </Route>
            <Route>
              <Notfound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
