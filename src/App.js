import React from "react";
import Header from "./Components/Header/Full/Header";
import Main from "./Components/Pages/Main/Full/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
