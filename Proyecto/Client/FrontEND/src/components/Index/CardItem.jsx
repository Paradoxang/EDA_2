// src/components/Index/CardItem.jsx
import React from 'react';
import styles from './CardItem.module.css';

const CardItem = ({ name, price }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.productName}>{name}</h3>
            <p className={styles.productPrice}>${price}</p>
            <button className={styles.buyButton}>Comprar</button>
        </div>
    );
};

export default CardItem;
