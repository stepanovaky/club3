import React from "react";
import Header from "./Components/Header/Full/Header";
import Main from "./Components/Pages/Main/Full/Main";
import About from "./Components/Pages/About/About";
import Registry from "./Components/Pages/Registry/Full/Registry";
import Events from "./Components/Pages/Events/Events";
import Calendar from "./Components/Pages/Calendar/Calendar";
import Merchandise from "./Components/Pages/Merchandise/Merchandise";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
//ADMIN PAGES
import Admin from "./Components/Hidden/Admin";
import { dummyEvents } from "./Components/helpers/dummy-events";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Main {...props} dummyEvents={dummyEvents} />}
          />
          <Route path="/about" component={About} />
          <Route path="/register" component={Registry} />
          <Route
            path="/events"
            render={(props) => <Events {...props} dummyEvents={dummyEvents} />}
          />
          <Route
            path="/calendar"
            render={(props) => (
              <Calendar {...props} dummyEvents={dummyEvents} />
            )}
          />
          <Route path="/merchandise" component={Merchandise} />
          <Route
            path="/2946fec9-4210-4aea-a828-fa315bad9a43"
            render={(props) => <Admin {...props} dummyEvents={dummyEvents} />}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
