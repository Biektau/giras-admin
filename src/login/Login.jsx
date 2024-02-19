import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const PASSWORD = "51120650";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password == PASSWORD) {
      localStorage.setItem("login", true);
      navigate("/");
    } else alert("Неверный пароль");
  };

  return (
    <div className={styles.container}>
      <form action="" onSubmit={(event) => handleSubmit(event)}>
        <span>Вход</span>
        <input
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
