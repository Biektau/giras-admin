import React from "react";
import styles from "./CommonInfo.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CommonInfoItemRule from "../../components/commonInfoItemRule/CommonInfoItemRule";

export default function CommonInfo() {
  const { height } = useWindowDimensions();

  let contentWrapperHeight = height - 20 * 2 - 50 - 10;

  const categoryRules = [
    {
      color: "#8ec07c",
      title1: "Категории спецодежды",
      strings1: [
        "Рабочая",
        "Влагозащитная",
        "От повышенных температур",
        "Для сферы услуг",
        "Трикотаж и головные уборы",
      ],
      title2: "Сезон спецодежды",
      strings2: ["Летний", "Зимний"],
      title3: "Пол спецодежды",
      strings3: ["Мужской", "Женский"],
    },
    {
      color: "#458588",
      title1: "Категории обуви",
      strings1: ["Повседневная", "Теромстойкая", "Влагостойкая"],
      title2: "Сезон обуви",
      strings2: ["Летний", "Зимний"],
      title3: "Пол обуви",
      strings3: ["Мужской", "Женский"],
    },
    {
      color: "#d79921",
      title1: "Категории перчаток",
      strings1: [
        "Трикотажные",
        "От пониженных температур",
        "Рукавицы / Вачеги",
        "От механических воздействий",
        "Краги",
        "Спилковые",
      ],
    },
    {
      color: "#cc241d",
      title1: "Категории СИЗ",
      strings1: [
        "Защита головы",
        "Защита глаз и лица",
        "Защита органов дыхания",
        "Защита органов слуха",
        "При высотных работах",
        "Диэлектрические",
        "Дерматологические",
      ],
    },
    {
      color: "#b16286",
      title1: "Ростовки мужской одежды",
      strings1: [
        "S 44-46 170",
        "M 46-48 176",
        "L 48-50 176",
        "XL 50-52 182",
        "XXL 52-54 188",
        "XXXL 54-56 188",
        
      ],
    },
  ];

  return (
    <div
      style={{ height: `${contentWrapperHeight}px` }}
      className={styles.container}
    >
      {categoryRules.map((item, index) => (
        <CommonInfoItemRule rule={item} key={index} />
      ))}
    </div>
  );
}
