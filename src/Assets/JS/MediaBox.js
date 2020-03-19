//Module Imports
import React, { useState } from 'react';
//CSS Imports
import classes from '../CSS/Film.module.css';


const MediaBox = (props) => {
    const source = props.source;
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    
    const set_1 = {
        opacity: 0.5,
        zindex:-100,
    };
    const set_2 = {
        opacity: 1,
        zindex:100,
    };

    var style =  hovered ? set_2 : set_1;
    return (
        <div>
            <video 
            className={classes.Video}
            autoPlay="autoplay" 
            muted 
            loop="loop" 
            // width={640} 
            // height={480}
            style={style}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            >
                <source src={source} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default MediaBox;
