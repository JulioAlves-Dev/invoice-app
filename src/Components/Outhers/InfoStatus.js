import React from "react";
import styles from "./InfoStatus.module.css";

const InfoStatus = ({ status, mode }) => {
  return (
    <div
      className={`${styles.InfoStatus} ${mode ? styles.Dark : ""} ${
        styles[status]
      }`}
    >
      <div className={styles.StatusBall}></div>
      <p>{status}</p>
    </div>
  );
};

export default InfoStatus;
