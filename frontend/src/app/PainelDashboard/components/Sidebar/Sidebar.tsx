import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <button className={styles.sideButton}>Projetos</button>
            <button className={styles.sideButton}>Equipes</button>
            <button className={styles.sideButton}>Trilhas Iniciais</button>
            <button className={styles.sideButton}>Eventos</button>
            <button className={styles.sideButton}>Mentores</button>
        </div>
    );
};

export default Sidebar;