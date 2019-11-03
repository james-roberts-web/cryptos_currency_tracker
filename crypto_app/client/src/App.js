
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


        <Switch>
          <Route exact path="/" component={ TopContainer } />
          <Route path="/details" component={ DetailContainer } />
          <Route path="/portfolio" render={ PortfolioContainer }/>
          <Route component={ ErrorPage } />
        </Switch>

        <NavBar />
      </div>
    </Router>

  );
}


export default App;
