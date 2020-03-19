// Module Imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { WindowPosition } from './Assets/JS/WindowPosition';
//Component Imports
import Nav from './Assets/JS/Nav';
import Home from './Assets/JS/Home';
import Film from './Assets/JS/Film';
import Photo from './Assets/JS/Photo';
import Info from './Assets/JS/Info';
import Page404 from './Assets/JS/Page404';


// CSS Imports
import './App.css';
// Media Imports


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOn:true
    }
  }
  componentDidMount() {

  }
  render() {
  return (
    <Router>
      <div className="App">
        {this.state.navOn ? <Nav /> : null }
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/film">
            <Film />
          </Route>
          <Route exact path="/photo">
            <Photo />
          </Route>
          <Route exact path="/info">
            <Info handleNav={(val) => this.setState({ navOn: val })}/>
          </Route>
          <Route path="*" >
            <Page404 handleNav={(val) => this.setState({ navOn: val })}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  };
};
export default App;
