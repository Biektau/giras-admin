import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Delete.module.scss";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/customButton/CustomButton";
import { IoIosArrowBack } from "react-icons/io";

export default function Delete() {
  const navigate = useNavigate();
  const [item, setItem] = useState();

  useEffect(() => {
    try {
      axios
        .get(
          `https://giras-backend-ruzal-02.amvera.io/${getLinkAdress(
            currentPath
          )}/getOne/${getIdByPath(currentPath)}`
        )
        .then((res) => {
          setItem(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const currentPath = window.location.pathname;

  function getLinkAdress(currentPath) {
    const splitted = currentPath.split("/");
    return splitted[1];
  }

  function getIdByPath(currentPath) {
    const splitted = currentPath.split("/");
    return splitted[3];
  }

  async function handleDelete() {
    try {
      axios
        .delete(
          `https://giras-backend-ruzal-02.amvera.io/${getLinkAdress(
            currentPath
          )}/delete/${getIdByPath(currentPath)}`
        )
        .then(navigate(`/${getLinkAdress(currentPath)}`));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    item && (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <CustomButton
            to={`/${getLinkAdress(currentPath)}`}
            icon={<IoIosArrowBack />}
            text="Назад"
            backColor="#d65d0e"
          />
          <div className={styles.content}>
            <span className={styles.title}>
              Вы уверены, что хотите удалить {item.name}?
            </span>
            <div className={styles.deleteButton} onClick={() => handleDelete()}>
              Удалить
            </div>
          </div>
        </div>
      </div>
    )
  );
}
