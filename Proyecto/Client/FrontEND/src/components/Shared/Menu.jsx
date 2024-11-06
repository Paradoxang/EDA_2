// src/components/Shared/Menu.jsx
import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <a href="/" className={styles.menuItem}>Inicio</a>
            <a href="/productos" className={styles.menuItem}>Productos</a>
            <a href="/contacto" className={styles.menuItem}>Contacto</a>
        </nav>
    );
};

export default Menu;
