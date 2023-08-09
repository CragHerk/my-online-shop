// Komponent LoginRegister.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../css/components/LoginRegister.module.css";

const LoginRegister = () => {
  const { loginWithRedirect, loginWithPopup, isAuthenticated } = useAuth0();

  const handleLoginOrRegister = async (isLogin) => {
    if (!isAuthenticated) {
      try {
        if (isLogin) {
          await loginWithRedirect();
        } else {
          await loginWithPopup({ screen_hint: "signup" });
        }
      } catch (error) {
        console.error("Error during authentication:", error);
      }
    }
  };

  return (
    <div className={styles.bigcontainer}>
      <Header />
      <div className={styles.container}>
        <h2>Welcome to My Online Store</h2>
        <p>Please log in or register to continue:</p>
        <div className={styles.logreg}>
          <button onClick={() => handleLoginOrRegister(true)}>Log In</button>
          <p>or </p>
          <button onClick={() => handleLoginOrRegister(false)}>Register</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginRegister;
