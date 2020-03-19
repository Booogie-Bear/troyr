//Module Imports
import React, { Component } from "react";
import MediaBox from './MediaBox';
//CSS Imports
import classes from '../CSS/Photo.module.css';


function getDistance(window, mouse) {
    
    var windowWidthMid = (window.width / 2);
    var distanceX = (windowWidthMid - mouse.x)
    var changeX = 0.3 * (1 * ((distanceX ** 3) * (1/(window.width * (10 ** 4))))) 

    var windowHeightMid = (window.height / 2);
    var distanceY = (windowHeightMid - mouse.y)
    var changeY = 0.3 * (1 * ((distanceY ** 3) * (1/(window.height * (10 ** 4))))) 

    return {
        changeX:changeX,
        changeY:changeY,
        windowWidth:window.width,
        windowHeight:window.height,

    };
};

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: {x:0, y:0},
            mouse: {x:0, y:0},
        };
    }
    _onMouseMove(e) {
        this.setState({
            // origin: {x:this.state.origin.x + change.changeX, y:this.state.origin.y + change.changeY},
            mouse: {x:e.clientX, y:e.clientY},
            }
        );
      }
    componentDidMount() {
        setInterval(() => {
            const change = getDistance(this.props.window, this.state.mouse);
            this.setState({
                origin: {x:this.state.origin.x + change.changeX, y:this.state.origin.y + change.changeY},            
                }
        );
        }, 10)
    }
    componentWillUnmount() {
        this.reset();
    }

    // changeOrigin() {
    //     this.setState({})   
    // }
    reset() {
        this.setState({
          origin: {x:0, y:0}
        });
    }

    render() {
        const change = getDistance(this.props.window, this.state.mouse);

    return (
        <div className={classes.Photo} >

            <div 
            className={classes.PhotoContainer} 
            onMouseMove={this._onMouseMove.bind(this)} 
            style={{
                transitionTimingFunction: "ease-in", 
                transition:`transform 0.5s`,
                transform:`translate(${this.state.origin.x}px, ${this.state.origin.y}px)`
            }}>
                <span className={classes.MediaBox} style={
                    {
                        top:"50%",
                        right:"30%"
                }}><MediaBox className={classes.Video} source={"https://s3-us-west-1.amazonaws.com/jordantroyer.com/Videos/Asia.mp4"}/></span><br />
                <span className={classes.MediaBox} style={
                    {
                        top:"70%",
                        right:"50%"
                }}><MediaBox className={classes.Video} source={"https://s3-us-west-1.amazonaws.com/jordantroyer.com/Videos/Dolce.mp4"}/></span><br />
                <span className={classes.MediaBox} style={
                    {
                        top:"40%",
                        right:"60%"
                }}>BOX 1</span><br />
                <span className={classes.MediaBox} style={
                    {
                        top:"20%",
                        right:"40%"
                }}><MediaBox className={classes.Video} source={"https://s3-us-west-1.amazonaws.com/jordantroyer.com/Videos/Remember.mp4"}/></span><br />

            </div>

            <p className={classes.CordLabel}>
                {`Cursor: ${this.state.mouse.x} ${this.state.mouse.y}`}
                <br />
                {`dX: ${change.changeX.toFixed(1)}`} {`dY: ${change.changeY.toFixed(1)}`}
                <br />
                {`Current: ${this.state.origin.x.toFixed(1)} ${this.state.origin.y.toFixed(1)}`}
                <br />
                {`Width: ${this.props.window.width}`} {`Height: ${this.props.window.height}`}
            </p>
        </div>
        );
    };
};
export default Photo;

