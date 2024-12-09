import * as React from 'react';
import classes from './Footer.module.css'
import { AboutUs } from './Elements/AboutUs';
import { SocialItem } from './Elements/SocialItem';
import { Contacts } from './Elements/Contacts';
import { Copyright } from './Elements/Copyright';

export const Footer: React.FC = () => {
    return(
        <footer className={classes.footer}>
            <div className={classes['footer-details']}>
                
                <AboutUs/>

                <div className={classes['social-items']}>
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
                </div>

                <Contacts
                    phone="+1 234 567890"
                    email="support@gsparfum.com"
                    address="123 Perfume St., Fragrance City"
                />
            </div>

            <Copyright />

        </footer>
    );
};