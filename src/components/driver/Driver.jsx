import React from "react";
import styles from "./Driver.module.css";
import Drive from "../../images/drive.png";

const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="drive.png" />
      </div>
      <div className={styles.right}>
        <h1>
          Find your perfect car <span>to try before you buy</span>
        </h1>
        <p>
          Make sure your future wheels work well with your lifestyle by talking
          your time in the driver's seat
        </p>
        <button>Browser Cars</button>
      </div>
    </div>
  );
};

export default Driver;
