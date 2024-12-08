import * as React from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import classes from './BaseLayout.module.css'

export const BaseLayout = ({ children }: {children: React.ReactNode}) => {
    return(
        <div className={classes.layout}>
            <Header/>
            <main className={classes.content}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};