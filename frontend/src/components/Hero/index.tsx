import React from 'react';
import styles from './Hero.module.css'; // Adjust the import path as needed

const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <h2>Welcome to Our E-Commerce Site</h2>
            <p>Find the latest products and the best deals here.</p>
            <button className={styles.ctaButton}>Shop Now</button>
        </div>
    );
};

export default Hero;
