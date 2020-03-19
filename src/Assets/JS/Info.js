//Module Imports
import React, { Component } from "react";
//CSS Imports
import classes from '../CSS/Info.module.css';


const overLay = "https://s3-us-west-1.amazonaws.com/jordantroyer.com/Logos/LogoOverlay.png";
const vidSrc = "https://s3-us-west-1.amazonaws.com/jordantroyer.com/Videos/Landing+.mp4";
const poster = "https://s3-us-west-1.amazonaws.com/jordantroyer.com/Videos/landingPoster.png";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.handleNav(false);
    }
    
    componentWillUnmount() {
        this.props.handleNav(true);
    }
    render() {
    return (
        <div className={classes.Info}>
            <video className={classes.OverlayVid} autoPlay="autoplay" muted loop="loop" poster={poster}>
                <source src={vidSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={classes.Overlay}>
                <img className={classes.OverlayImage} src={overLay} />
            </div>
        </div>
        );
    };
};


export default Info;