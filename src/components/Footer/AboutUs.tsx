import * as React from 'react';
import classes from './Footer.module.css'

export const AboutUs: React.FC = () => {
    return(
        <div className={classes.about}>
                <h4>About us</h4>
                <p>GS Parfum - your go-to destination for luxury fragrances</p>
        </div>
    );
};