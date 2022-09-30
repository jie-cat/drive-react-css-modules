import React from "react";
import styles from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h1>Luxury Selection</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1632548260498-b7246fa466ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="Rolls Royce"
          />
          <div className={styles.content}>
            <p>Rolls Royce</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=" Maserati"
          />
          <div className={styles.content}>
            <p> Maserati</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt="Porsche"
          />
          <div className={styles.content}>
            <p>Porsche</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Ferrari"
          />
          <div className={styles.content}>
            <p>Ferrari</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
