
import React from 'react';
import TopContainer from './containers/TopContainer'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
          <Route exact path="/" render={() => <Redirect to="/currencies" />} />
          <Route path="/currencies" component={ TopContainer } />
          <Route path="/portfolio" component={ PortfolioContainer }/>
          <Route component={ ErrorPage } />
        </Switch>
      </div>
    </Router>

  );
}


export default App;

// <Route exact path="/">
//   <Redirect to="/currencies" />
// </Route>
