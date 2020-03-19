//Module Imports
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const cube = "https://s3-us-west-1.amazonaws.com/jordantroyer.com/404/CUBE.mp4";
const halo = "https://s3-us-west-1.amazonaws.com/jordantroyer.com/404/HALO.mp4";
const ring = "https://s3-us-west-1.amazonaws.com/jordantroyer.com/404/RING.mp4";

const style = {
  
  position: "absolute",
  display: "block",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zindex: "100",
};

const divStyle = {
  position: "absolute",
  display: "block",
  backgroundcolor:"black",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zindex: "50",
}

var choice = Math.floor(Math.random() * 3);
const videoArr = [cube, halo, ring];

class Page404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect:false,
    }
  }
  componentDidMount() {
      this.props.handleNav(false);
  }

  componentWillUnmount() {
      this.props.handleNav(true);
  }
  render() {
    if (!this.state.redirect) {
    return (
      <div> 
        <video 
          src={videoArr[choice]} 
          autoPlay="autoplay" 
          muted 
          loop="loop" 
          style={style}
          
          >
        </video> 
        <div 
          style={divStyle}
          onClick={() => this.setState({redirect:true})}
          >
        </div>
      </div> 
    )} else {
      return (
        <Redirect to="/" />
      )
    }
  }
};

export default Page404;


