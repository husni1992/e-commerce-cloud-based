import React from "react";
import styles from "./Products.module.css"; // Adjust the import path as needed
import { productList } from "./mock.products";

const Products: React.FC = () => {
  return (
    <section className={styles.products}>
      <h2>Our Products</h2>
      <div className={styles.productGrid}>
        {productList.map((product) => (
          // Move to Product.tsx component
          <div key={product.id} className={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productDescription}>{product.description}</p>
            <div className={styles.productPrice}>$ {product.price}</div>
            <div style={{ textAlign: "center" }}>
              <button className={styles.productAddToCart}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
