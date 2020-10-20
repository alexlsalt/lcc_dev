import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import PodcastView from "./components/PodcastView";
import CohortView from './components/CohortView';
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path='/'>
            <HomeView />
          </Route>
          <Route path='/podcast'>
            <PodcastView />
          </Route>
          <Route path='/cohorts'>
            <CohortView />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
