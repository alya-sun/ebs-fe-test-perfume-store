import * as React from 'react';
import classes from './Footer.module.css'
import { AboutUs } from './AboutUs';
import { SocialItem } from './SocialItem';
import { Contacts } from './Contacts';
import { Copyright } from './Copyright';

export const Footer: React.FC = () => {
    return(
        <footer className={classes.footer}>
            <AboutUs/>

            < SocialItem
                url="https://instagram.com"
                iconSrc="/assets/images/icons/instagram.png"
                altText="Instagram"
            />
            < SocialItem
                url="https://facebook.com"
                iconSrc="/assets/images/icons/facebook.png"
                altText="Facebook"
            />
            < SocialItem
                url="https://twitter.com"
                iconSrc="/assets/images/icons/twitter.png"
                altText="Twitter"
            />

            <Contacts
                phone="+1 234 567890"
                email="support@gsparfum.com"
                address="123 Perfume St., Fragrance City"
            />

            <Copyright />

        </footer>
    );
};