import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.branding} onClick={navigateToHome}>
        <h1>E-Circuit</h1>
      </div>
      <nav className={styles.navigation}>
        <a href="#features">Features</a>
        <a href="#products">Products</a>
        <a href="#footer">Contact</a>
      </nav>
    </header>
  );
};

function navigateToHome() {
  window.location.hash = "home";
}

export default Header;
