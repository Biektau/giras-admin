import React, { useEffect } from "react";
import styles from "./MainLayout.module.scss";
import Header from "../components/header/Header";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("login") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
}
