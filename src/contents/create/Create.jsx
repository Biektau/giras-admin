import React from "react";
import styles from "./Create.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CustomButton from "../../components/customButton/CustomButton";
import { IoIosArrowBack } from "react-icons/io";

import WorkWearForm from "../../createForms/workWearForm/WorkWearForm";
import ShoesForm from "../../createForms/shoesForm/ShoesForm";
import GlovesForm from "../../createForms/glovesForm/GlovesForm";
import PpeForm from "../../createForms/ppeForm/PpeForm";

export default function Create() {
  const currentPath = window.location.pathname;

  function getLinkAdress(currentPath) {
    const splitted = currentPath.split("/")[1];
    return splitted;
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
              <WorkWearForm />
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
              <ShoesForm />
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
              <GlovesForm />
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
              <PpeForm />
            </div>
          </div>
        </div>
      );
  }
}
