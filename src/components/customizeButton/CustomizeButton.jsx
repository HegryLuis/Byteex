import React from "react";
import styles from "./CustomizeButton.module.css";
import arrow from "./../../images/arrow.svg";

const CustomizeButton = () => {
  return (
    <button className={styles.btn} type="submit">
      <div className={styles.btn_content}>
        <span className={styles.btn_text}>Customize Your Outfit</span>
        <img alt="arrow" src={arrow} />
      </div>
    </button>
  );
};

export default CustomizeButton;
