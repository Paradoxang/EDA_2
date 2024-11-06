// src/pages/Index/Index.jsx
import React from 'react';
import styles from './index.module.css';
import CardItem from '../../components/Index/CardItem';
import Menu from '../../components/Shared/Menu';

const HomePage = () => {
    return (
        <div className={styles.homeContainer}>
            <Menu />
            <h1 className={styles.title}>Bienvenido a nuestra Tienda de E-commerce</h1>
            <div className={styles.productGrid}>
                {/* Aquí puedes mapear productos para mostrarlos en tarjetas */}
                <CardItem name="Producto 1" price={299} />
                <CardItem name="Producto 2" price={399} />
                {/* Agrega más CardItem según necesites */}
            </div>
        </div>
    );
};

export default HomePage;
