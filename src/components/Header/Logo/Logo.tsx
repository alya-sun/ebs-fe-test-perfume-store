import * as React from 'react';
import classes from '../Header.module.css'


export const Logo: React.FC = () => {
    return(
        <div className={classes.logo}>
            <img src="https://cdn-icons-png.flaticon.com/512/2960/2960590.png"  alt="Perfume Store" className={classes['logo-image']} />
            <h1 className={classes['logo-text']}>GS Parfum</h1>
        </div>
    );
};