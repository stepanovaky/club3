import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Full/Header";
import Main from "./Components/Pages/Main/Full/Main";
import About from "./Components/Pages/About/About";
import Registry from "./Components/Pages/Registry/Full/Registry";
import VerifyEmail from "./Components/Pages/VerifyEmail/VerifyEmail";
import Events from "./Components/Pages/Events/Events";
import EventPage from "./Components/Pages/EventPage/EventPage";
import Calendar from "./Components/Pages/Calendar/Calendar";
import Results from "./Components/Pages/Results/Results";
import Merchandise from "./Components/Pages/Merchandise/Merchandise";
import ConfirmationPage from "./Components/Pages/Confirmation Page/ConfirmationPage";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
//ADMIN PAGES
import Admin from "./Components/Hidden/Admin";
import { events } from "./Components/helpers/dummy-events";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "semantic-ui-css/semantic.min.css";
import "./modal.scss";
import "./Main.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/joinclub" component={Registry} />
          <Route
            path="/verifyemail/:verificationToken"
            component={VerifyEmail}
          />
          <Route path="/events" component={Events} />
          <Route path="/eventpage/:eventId" component={EventPage} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/results" component={Results} />
          <Route path="/merchandise" component={Merchandise} />
          <Route path="/confirm" component={ConfirmationPage} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
