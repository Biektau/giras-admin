import React from "react";
import styles from "./CustomButton.module.scss";
import { NavLink } from "react-router-dom";

export default function CustomButton({ to, icon, text, backColor }) {
  return (
    <NavLink
      to={to}
      className={styles.container}
      style={{ backgroundColor: backColor }}
    >
      {icon} {text}
    </NavLink>
  );
}
