import React from 'react';
import {Navigation} from './Navigation/Navigation';
import {Logo} from './Logo/Logo';
import classes from './Header.module.css'
import { IconButton } from '../Common/IconButton/IconButton';
import { useNavigation } from '../../hooks/useNavigation';

export const Header: React.FC = () => {
    const { goToCart, goToProfile } = useNavigation();
    return(
        <header className={classes.header}>
            <Logo />
            <IconButton
                iconSrc="/assets/images/icons/profile.png"
                altText="Profile"
                onClick={goToProfile}
            />
            <IconButton
                iconSrc="/assets/images/icons/cart.png"
                altText="Cart"
                onClick={goToCart}
            />
            <Navigation />
            
        </header>
    );
};