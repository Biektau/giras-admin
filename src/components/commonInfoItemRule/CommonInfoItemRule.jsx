import React from "react";
import styles from "./CommonInfoItemRule.module.scss";
export default function CommonInfoItemRule({ rule }) {
  return (
    <div style={{ color: `${rule.color}` }} className={styles.container}>
      {rule.title1 && (
        <div className={styles.section}>
          <div className={styles.title}>{rule.title1}</div>
          <div className={styles.strings}>
            {rule.strings1.map((item, index) => (
              <div key={index} className={styles.string}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
      {rule.title2 && (
        <div className={styles.section}>
          <div className={styles.title}>{rule.title2}</div>
          <div className={styles.strings}>
            {rule.strings2.map((item, index) => (
              <div key={index} className={styles.string}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
      {rule.title3 && (
        <div className={styles.section}>
          <div className={styles.title}>{rule.title3}</div>
          <div className={styles.strings}>
            {rule.strings3.map((item, index) => (
              <div key={index} className={styles.string}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
