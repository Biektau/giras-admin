import React from 'react'
import styles from "./Spinner.module.scss"

export default function Spinner() {
  return (
    <div className={styles.container}>
      <span className={styles.spinner}></span>
    </div>
  )
}
