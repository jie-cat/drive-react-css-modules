import React, { useState } from "react";
import Logo from "../../images/logo.png";
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.css";

const Navbar = () => {
  let [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={Logo} className={styles.logo} />
      <nav>
        <ul
          className={nav ? [styles.menu, styles.active].join(" ") : styles.menu}
        >
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
          <li>
            <a href="/">
              <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.mobile_btn}>
        <AiOutlineMenu onClick={() => setNav(!nav)} />
      </div>
    </header>
  );
};

export default Navbar;
