import React from "react";
import styles from "./css/Header.module.css";
import Profile from "./Profile";

function Header({ user }) {
  return (
    <header className={styles.header}>
      <a href="/">
        <img
          src="Icons/logo.svg"
          type="image/svg+xml"
          alt="Header_logo"
        />
      </a>
      {user ? (
        <Profile user={user} />
      ) : (
        <button className={styles.login_btn}>로그인</button>
      )}
    </header>
  );
}

export default Header;
