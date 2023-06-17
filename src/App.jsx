import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume.jsx";
import Navbar from "./components/Navbar.jsx";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio.jsx";
// import Contact from "./components/Contact.jsx";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/steve-levalley" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/overview" component={Overview} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="*">
          <Redirect to="/steve-levalley" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
