// frontend/src/app/PainelDashboard/page.tsx
import React from 'react';
import Header from './components/HeaderDashboard/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import styles from './PainelDashboard.module.css';

const PainelDashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.layout}>
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
};

export default PainelDashboard;
