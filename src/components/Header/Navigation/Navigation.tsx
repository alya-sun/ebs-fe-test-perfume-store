import * as React from 'react';
import NavigationItem from './NavigationItem';
import classes from '../Header.module.css'

export const Navigation: React.FC = () => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes['nav-list']}>
                <NavigationItem href="/" label="Home" />
                <NavigationItem href="/" label="About us" />
            </ul>
        </nav>
    );
};