import React from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  const headerRoutes = [
    { route: "/", title: "Общая информация" },
    { route: "/workWear", title: "Спецодежда" },
    { route: "/shoes", title: "Обувь" },
    { route: "/gloves", title: "Перчатки" },
    { route: "/ppe", title: "Средства индивидуальной защиты" },
  ];
  return (
    <div className={styles.container}>
      {headerRoutes.map((item, index) => (
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to={item.route}
          key={index}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
