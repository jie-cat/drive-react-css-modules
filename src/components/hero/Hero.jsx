import React from "react";
import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Where</label>
          <input
            type="text"
            placeholder="Search Location"
            className={styles.text_input}
          />
          <span className={styles.border}></span>
        </div>
        <div className={styles.from}>
          <label>From</label>
          <input type="date" />
          <span className={styles.border}></span>
        </div>
        <div className={styles.until}>
          <label>Until</label>
          <input type="date" />
          <span className={styles.border}></span>
        </div>
        <div className={styles.search_btn}>
          <button>Search for cars</button>
          <AiOutlineSearch size={25} className={styles.icon} />
        </div>
      </form>
    </div>
  );
};

export default Hero;
