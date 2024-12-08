import * as React from 'react';
import classes from '../Header.module.css'

interface NavigationItemProps {
    href: string;
    label: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({href, label}) => {
    return (
        <li className={classes['nav-item']}>
            <a href={href} className={classes['nav-link']}>
                {label}
            </a>
        </li>
    );
};

export default NavigationItem;