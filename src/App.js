import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavbarPage from './components/NavbarPage';
import FooterPage from './components/FooterPage';
import Home from './views/Home';
import About from './views/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarPage />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} exact/>
          </Switch>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
