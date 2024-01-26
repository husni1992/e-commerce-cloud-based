import React from 'react';
import styles from './Features.module.css'; // Adjust the import path as needed

const Features: React.FC = () => {
    return (
        <div className={styles.features}>
            <div className={styles.featureItem}>
                <h3>Free Shipping</h3>
                <p>Get free shipping on orders over $50.</p>
            </div>
            <div className={styles.featureItem}>
                <h3>24/7 Customer Support</h3>
                <p>Our support team is here to help you at any time of the day.</p>
            </div>
            <div className={styles.featureItem}>
                <h3>Money-back Guarantee</h3>
                <p>If you're not satisfied with your purchase, get a full refund.</p>
            </div>
        </div>
    );
};

export default Features;


