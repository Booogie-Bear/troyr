//Module Imports
import React, { Component } from "react";
import MediaBox from './MediaBox';
//CSS Imports
import classes from '../CSS/Film.module.css';




function getDistance(window, mouse, origin) {

    var windowWidthMid = (window.width / 2);
    var distanceX = (windowWidthMid - mouse.x)
    var changeX = 0.25 * (1 * ((distanceX ** 3) * (1/(window.width * (10 ** 4))))) 

    var windowHeightMid = (window.height / 2);
    var distanceY = (windowHeightMid - mouse.y)
    var changeY = 0.25 * (1 * ((distanceY ** 3) * (1/(window.height * (10 ** 4))))) 

    var diffX = (windowWidthMid - Math.abs(origin.x));
    var diffY = (windowHeightMid - Math.abs(origin.y));


    return {
        changeX:changeX,
        changeY:changeY,
    };
};

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: {x:0, y:0},
            mouse: {x:0, y:0},
            window:{width:0, height:0},
            transition: 0.5,
            active:false,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    _onMouseMove(e) {
        this.setState({
            mouse: {x:e.clientX, y:e.clientY},
            }
        );
      }
    _onMouseLeave(e) {
        this.setState({
            active:false
        });
    }
    _onMouseEnter(e) {
        this.setState({
            active:true
        });
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        setInterval(() => {
            if (this.state.active) {
            const change = getDistance(this.state.window, this.state.mouse, this.state.origin);
            this.setState({
                origin: {x:this.state.origin.x + change.changeX, y:this.state.origin.y + change.changeY}, 
                transition: 0.1,           
                });
            } else {
            this.setState({
                origin: {x:0, y:0},
                transition: 5,            
                });
            }
        })
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        this.reset();
    }
    updateWindowDimensions() {
        this.setState({window:{ width: window.innerWidth, height: window.innerHeight }});
      }

    reset() {
        this.setState({
          origin: {x:0, y:0}
        });
    }

    render() {
        const change = getDistance(this.state.window, this.state.mouse, this.state.origin);
    return (
        <div className={classes.Film} 
            onMouseMove={this._onMouseMove.bind(this)} 
            onMouseEnter={this._onMouseEnter.bind(this)} 
            onMouseLeave={this._onMouseLeave.bind(this)} >

            <div 
            className={classes.FilmContainer} 
            style={{
                transitionTimingFunction: "ease", 
                transition:`transform ${this.state.transition}s`,
                transform:`translate(${this.state.origin.x}px, ${this.state.origin.y}px)`
            }}>
                <span className={classes.MediaBox} style={
                    {
                        top:"0vh",
                        right:"0vh"
                }}><MediaBox className={classes.Video} source={"https://s3-us-west-1.amazonaws.com/jordantroyer.com/Videos/Asia.mp4"}/></span><br />
                <span className={classes.MediaBox} style={
                    {
                        top:"0vh",
                        right:"0vh"
                }}><MediaBox className={classes.Video} source={"https://s3-us-west-1.amazonaws.com/jordantroyer.com/Videos/Dolce.mp4"}/></span><br />
                <span className={classes.MediaBox} style={
                    {
                        top:"0vh",
                        right:"0vh"
                }}>BOX 1</span><br />
                <span className={classes.MediaBox} style={
                    {
                        top:"0h",
                        right:"0vh"
                }}><MediaBox className={classes.Video} source={"https://s3-us-west-1.amazonaws.com/jordantroyer.com/Videos/Remember.mp4"}/></span><br />

            </div>

            <p className={classes.CordLabel}>
                {`Mouse Active: ${this.state.active}`}
                <br />
                {`Cursor: ${this.state.mouse.x} ${this.state.mouse.y}`}
                <br />
                {`dX: ${change.changeX.toFixed(1)}`} {`dY: ${change.changeY.toFixed(1)}`}
                <br />
                {`Current: ${this.state.origin.x.toFixed(1)} ${this.state.origin.y.toFixed(1)}`}
                <br />
                {`Width: ${this.state.window.width}`} {`Height: ${this.state.window.height}`}
            </p>
        </div>
        );
    };
};
export default Film;

