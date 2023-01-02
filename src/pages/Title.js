import React from "react";
import styles from "./Title.module.css";

export default function Title({ title, quote, author }) {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.subheading}> {"\"" + quote + "\""}</p>
      <p className={styles.subheading}>{"- " + author}</p>
    </div>
  );
}
