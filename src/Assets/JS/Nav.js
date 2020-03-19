//Module Imports
import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";
import GlitchClip from 'react-glitch-effect/core/Clip';
// CSS Imports
import classes from '../CSS/Nav.module.css';


const logo = "https://s3-us-west-1.amazonaws.com/jordantroyer.com/Logos/troyerWhiteTransFitted.png";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
        <div className={classes.Nav}>
            <nav className={classes.NavMenu}>
                <GlitchClip onHover={true}>
                    <div className={classes.LogoContainer}>
                        <Link exact to="/">
                            <img className={classes.Logo} src={logo} width={250} alt="TLOGO"/>
                        </Link>
                    </div>
                </GlitchClip>
                <div className={classes.ListContainer}>
                    <ul>
                        <GlitchClip onHover={true}>
                            <li className={classes.List}>
                                <Link className={classes.Links} to="/film">FILM</Link>
                            </li>
                        </GlitchClip>
                        
                        <GlitchClip onHover={true}>
                            <li className={classes.List}>
                                <Link className={classes.Links} to="/photo">PHOTO</Link>
                            </li>
                        </GlitchClip>

                        <GlitchClip onHover={true}>
                            <li className={classes.List}>
                                <Link className={classes.Links} to="/info">INFO</Link>
                            </li>
                        </GlitchClip>

                        <GlitchClip onHover={true}>
                            <li className={classes.List}>
                                <Link className={classes.Links} to="/404">404</Link>
                            </li>
                        </GlitchClip>
                    </ul>
                </div>
            </nav>
        </div>
    );
    };
};
export default Nav;


