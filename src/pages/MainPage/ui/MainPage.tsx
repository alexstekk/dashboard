import React from 'react';
import back from 'shared/assets/profilebg.jpg';
import { StatInfo } from 'widgets/StatInfo/ui/StatInfo';
import styles from './MainPage.module.scss';

const MainPage = () => (
    <div className={styles.content}>
        <div className={styles.imgWrapper}>
            <img src={back} alt="img" />
        </div>
        <h1 className={styles.h1}>Welcome to dashboard app</h1>
        <StatInfo />
    </div>
);

export default MainPage;
