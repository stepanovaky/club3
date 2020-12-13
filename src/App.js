import React from "react";
import Header from "./Components/Header/Full/Header";
import Main from "./Components/Pages/Main/Full/Main";
import About from "./Components/Pages/About/About";
import Registry from "./Components/Pages/Registry/Registry";
import Events from "./Components/Pages/Events/Events";

import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Registry} />
          <Route path="/events" component={Events} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
