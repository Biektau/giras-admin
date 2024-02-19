import React from "react";
import styles from "./TableItem.module.scss";
import { FaInfoCircle, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TableItem({ item }) {
  const currentUrl = window.location.pathname;
  return (
    <div className={styles.container}>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.date}>{item.date}</span>
      <div className={styles.controllers}>
        <Link to={`${currentUrl}/itemInfo/${item._id}`}>
          <FaInfoCircle style={{ color: "#458588" }} />
        </Link>
        <Link to={`${currentUrl}/update/${item._id}`}>
          <FaEdit style={{ color: "#d79921" }} />
        </Link>
        <Link to={`${currentUrl}/delete/${item._id}`}>
          <FaRegTrashAlt style={{ color: "#cc241d" }} />
        </Link>
      </div>
    </div>
  );
}
