import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Update.module.scss";
import CustomButton from "../../components/customButton/CustomButton";
import { IoIosArrowBack } from "react-icons/io";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import WorkWearUpdateForm from "../../updateForms/workWearUpdateForm/WorkWearUpdateForm";
import ShoesUpdateForm from "../../updateForms/shoesUpdateForm/ShoesUpdateForm";
import GlovesUpdateForm from "../../updateForms/glovesUpdateForm/GlovesUpdateForm";
import PpeUpdateForm from "../../updateForms/ppeUpdateForm/PpeUpdateForm";

export default function Update() {
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

  const { height } = useWindowDimensions();

  let contentHeight = height - 2 * 2 - 15 * 2 - 40 - 15;

  switch (getLinkAdress(currentPath)) {
    case "workWear":
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <CustomButton
              to="/workWear"
              icon={<IoIosArrowBack />}
              text="Назад"
              backColor="#d65d0e"
            />
            <div
              style={{ height: `${contentHeight}px` }}
              className={styles.content}
            >
              {item && <WorkWearUpdateForm item={item} />}
            </div>
          </div>
        </div>
      );
    case "shoes":
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <CustomButton
              to="/shoes"
              icon={<IoIosArrowBack />}
              text="Назад"
              backColor="#d65d0e"
            />
            <div
              style={{ height: `${contentHeight}px` }}
              className={styles.content}
            >
              {item && <ShoesUpdateForm item={item} />}
            </div>
          </div>
        </div>
      );
    case "gloves":
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <CustomButton
              to="/gloves"
              icon={<IoIosArrowBack />}
              text="Назад"
              backColor="#d65d0e"
            />
            <div
              style={{ height: `${contentHeight}px` }}
              className={styles.content}
            >
              {item && <GlovesUpdateForm item={item} />}
            </div>
          </div>
        </div>
      );
    case "ppe":
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <CustomButton
              to="/ppe"
              icon={<IoIosArrowBack />}
              text="Назад"
              backColor="#d65d0e"
            />
            <div
              style={{ height: `${contentHeight}px` }}
              className={styles.content}
            >
              {item && <PpeUpdateForm item={item} />}
            </div>
          </div>
        </div>
      );
  }
}
