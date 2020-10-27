import React from "react";
import "./Common.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopHeadlines from "./TopHeadlines";
import Business from "./Business";
import Entertainment from "./Entertainment";
import Health from "./Health";
import Science from "./Science";
import Sports from "./Sports";
import Technology from "./Technology";

export default function App() {
  return <Router>
    <Switch>
      <Route path="/" exact component={TopHeadlines} />
      <Route path="/business" exact component={Business} />
      <Route path="/entertainment" exact component={Entertainment} />
      <Route path="/health" exact component={Health} />
      <Route path="/science" exact component={Science} />
      <Route path="/sports" exact component={Sports} />
      <Route path="/technology" exact component={Technology} />
    </Switch>
  </Router>;
}
