import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="/Images/codigocerto.svg" alt="Logo" className={styles.logo} />
            <button className={styles.logout}>Logout</button>
        </header>
    );
};

export default Header;