import React from "react";
import "./App.css"; // Your main CSS file
import Header from "./components/Header"; // Adjust the import path as needed
import Hero from "./components/Hero"; // Adjust the import path as needed
import Features from "./components/Features"; // Adjust the import path as needed
import Products from "./components/Products"; // Adjust the import path as needed
import Footer from "./components/Footer"; // Adjust the import path as needed

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
