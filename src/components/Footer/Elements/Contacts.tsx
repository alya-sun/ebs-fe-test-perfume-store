import * as React from 'react';
import classes from '../Footer.module.css'

interface ContactsProps {
    phone: string;
    email: string;
    address: string;
}
export const Contacts: React.FC<ContactsProps> = ({phone, email, address}) => {
    return(
        <div className={classes.contacts}>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
        </div>
    );
};