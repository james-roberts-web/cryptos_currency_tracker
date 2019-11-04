
import React from 'react';
import TopContainer from './containers/TopContainer'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailContainer from './containers/DetailContainer'
import PortfolioContainer from './containers/PortfolioContainer'
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ TopContainer } />
          <Route path="/details" component={ DetailContainer } />
          <Route path="/portfolio" component={ PortfolioContainer }/>
          <Route component={ ErrorPage } />
        </Switch>
      </div>
    </Router>

  );
}


export default App;
