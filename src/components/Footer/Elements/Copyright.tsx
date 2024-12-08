import * as React from 'react';
import classes from '../Footer.module.css'

export const Copyright: React.FC = () => {
    return(
        <div className={classes.copyright}>
            <p>© 2024 GS Parfum. All rights reserved.</p>
        </div>
    );
};