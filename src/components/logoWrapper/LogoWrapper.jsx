import React from "react";
import styles from "./LogoWrapper.module.css";

const LogoWrapper = ({ img }) => {
  return (
    <div className={styles.wrapper_logo}>
      <img alt="logo" src={img} />
    </div>
  );
};

export default LogoWrapper;
