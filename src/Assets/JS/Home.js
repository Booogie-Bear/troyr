//Module Imports
import React from 'react';
import { WindowPosition } from './WindowPosition';
import { MousePosition } from './MousePosition';
//CSS Imports
import classes from '../CSS/Home.module.css';

const Home = () => {
    const position = getPosition();
    const vidSrc = "https://s3-us-west-1.amazonaws.com/jordantroyer.com/Videos/Landing+.mp4";
    return (
        <div className={classes.Home}>
            <div className={classes.VideoContainer}>
                <video className={classes.Video}  width={1920} height={865} autoPlay="autoplay" muted loop="loop"  
                    style={{
                        transitionTimingFunction: "ease-out",
                        transition:`transform 2s`,
                        transform:`translate(${position.newX}px, ${position.newY}px)`
                        }}
                    >
                    <source src={vidSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};


export default Home;



function getPosition() {
    const position = MousePosition();
    const dimension = WindowPosition();
  
    const windowWidth = dimension.width;
    const windowHeight = dimension.height;
  
    const movementStrength = 100;
    const height = movementStrength / windowWidth;
    const width = movementStrength / windowHeight;
    var pageX = position.x - (windowWidth / 2);
    var pageY = position.y - (windowHeight / 2);
    var newvalueX = width * pageX * -1;
    var newvalueY = height * pageY * -1;
  
    return {
        width:windowWidth,
        height:windowHeight,
        x:newvalueX, 
        y:newvalueY,
        newX:newvalueX, 
        newY:newvalueY,
    };  
  };