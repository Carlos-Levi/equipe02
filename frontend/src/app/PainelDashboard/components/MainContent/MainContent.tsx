import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.topButtons}>
                <button className={styles.topButton}>X Projetos</button>
                <button className={styles.topButton}>Y Equipes</button>
                <button className={styles.topButton}>Z Trilhas Iniciais</button>
                <button className={styles.topButton}>W Eventos</button>
                <button className={styles.topButton}>Q Mentores</button>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>
        </div>
    );
};

export default MainContent;