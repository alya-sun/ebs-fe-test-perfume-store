import * as React from 'react';
import classes from './IconButton.module.css'

interface IconButtonProps {
    iconSrc: string;
    altText: string;
    className?: string;
    onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({iconSrc, altText, onClick, className=''}) => {
    return(
        <button className={`${classes['icon-button']} ${className}`} onClick={onClick}>
            <img src={iconSrc} alt={altText} className={classes.icon} />
        </button>
    );
};