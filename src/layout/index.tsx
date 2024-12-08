import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent';
import * as React from 'react';
import classes from './BaseLayout.module.css'

export const BaseLayout: React.FC = () => {
    return(
        <div className={classes.layout}>
            <Header/>
            <main className={classes.content}>
                <MainContent/>
            </main>
            <Footer/>
        </div>
    );
};