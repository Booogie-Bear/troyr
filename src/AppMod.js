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

const viewport = WindowPosition();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOn:true,
            window:viewport,
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    handleNav(bool){
        this.setState({navOn:bool});
    }
    render () {
    return (
        <Router>
        <div className="App">
            <Nav navOn={this.navOn}/>
            {/* <p id="CordLabel" style={{color:"white"}}>
                {`Width: ${viewport.width}`} {`Height: ${viewport.width}`}
            </p> */}
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/film">
                <Film window={viewport}/>
            </Route>
            <Route exact path="/photo">
                <Photo />
            </Route>
            <Route exact path="/info">
                <Info handleNav={this.handleNav}/>
            </Route>
            <Route path="*" component={Page404} />
            </Switch>
        </div>
        </Router>
        );
    };
};
export default App;
