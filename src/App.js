import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


//import app components
import NavBar from './Components/NavBar';
import ImageContainer from './Components/ImageContainer';
import NotFound from './Components/NotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/cats" />} />
            <Route exact path="/search/:query" component={ImageContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

