import * as React from 'react';
import classes from './Footer.module.css'

interface SocialItemProps {
    url: string;
    iconSrc: string;
    altText: string; 
    className?: string;
}

export const SocialItem: React.FC<SocialItemProps> = ({url, iconSrc, altText, className=''}) => {
    return(
        <div className={`${classes.socials} ${className}`}>
                <a href={url}><img src={iconSrc} alt={altText} /></a>
        </div>
    );
};