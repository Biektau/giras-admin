import React, { useState } from "react";
import styles from "./PpeUpdateForm.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PpeUpdateForm({ item }) {
  const navigate = useNavigate();

  const ppeParams = {
    category: [
      "Защита головы",
      "Защита глаз и лица",
      "Защита органов дыхания",
      "Защита органов слуха",
      "При высотных работах",
      "Диэлектрические",
      "Дерматологические",
    ],
    checkParams: function (category) {
      if (this.category.includes(category) === false) {
        alert("Неверно указана категория");
        return false;
      }
      return true;
    },
  };

  const [values, setValues] = useState({
    name: item.name,
    price: item.price,
    standard: item.standard,
    series: item.series,
    veryfied: item.veryfied,
    averageVolume: item.averageVolume,
    averageWeight: item.averageWeight,
    category: item.category,
    mainImg: item.mainImg,
    img1: item.allImages[0] || "",
    img2: item.allImages[1] || "",
    img3: item.allImages[2] || "",
    img4: item.allImages[3] || "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  function removeEmptyElements(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== "") {
        result.push(array[i]);
      }
    }
    return result;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (ppeParams.checkParams(values.category)) {
      try {
        const { img1, img2, img3, img4 } = values;
        const tempImageArray = [img1, img2, img3, img4];
        const imgArray = removeEmptyElements(tempImageArray);

        await axios
          .put(`https://giras-backend-ruzal-02.amvera.io/ppe/update/${item._id}`, {
            name: values.name,
            price: values.price,
            standard: values.standard,
            series: values.series,
            veryfied: values.veryfied,
            averageVolume: values.averageVolume,
            averageWeight: values.averageWeight,
            category: values.category,
            mainImg: values.mainImg,
            allImages: imgArray,
          })
          .then(navigate("/ppe"));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form
      className={styles.container}
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className={styles.inputLine}>
        <span className={styles.title}>Наименование обуви</span>
        <input
          className={styles.inputText}
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.name}
        />
      </div>
      <div className={styles.inputLine}>
        <span className={styles.title}>Цена</span>
        <input
          className={styles.inputText}
          type="text"
          name="price"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.price}
        />
      </div>
      <div className={styles.inputLine}>
        <span className={styles.title}>Коллекция</span>
        <input
          className={styles.inputText}
          type="text"
          name="series"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.series}
        />
      </div>
      <div className={styles.inputLine}>
        <span className={styles.title}>ГОСТ</span>
        <input
          className={styles.inputText}
          type="text"
          name="standard"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.standard}
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Минпромторг</span>
        <input
          className={styles.inputText}
          type="text"
          name="veryfied"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.veryfied}
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Средний объем</span>
        <input
          className={styles.inputText}
          type="text"
          name="averageVolume"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.averageVolume}
        />
      </div>
      <div className={styles.inputLine}>
        <span className={styles.title}>Средний вес</span>
        <input
          className={styles.inputText}
          type="text"
          name="averageWeight"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.averageWeight}
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Категория</span>
        <input
          className={styles.inputText}
          type="text"
          name="category"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.category}
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Главная картинка</span>
        <input
          className={styles.inputText}
          type="text"
          name="mainImg"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.mainImg}
        />
      </div>
      {values.mainImg && (
        <img className={styles.mainImg} src={values.mainImg} alt="mainImg" />
      )}
      <div className={styles.inputLine}>
        <span className={styles.title}>Картинка 1</span>
        <input
          className={styles.inputText}
          type="text"
          name="img1"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.allImages[0] || ""}
        />
      </div>
      {values.img1 && (
        <img className={styles.mainImg} src={values.img1} alt="mainImg" />
      )}
      <div className={styles.inputLine}>
        <span className={styles.title}>Картинка 2</span>
        <input
          className={styles.inputText}
          type="text"
          name="img2"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.allImages[1] || ""}
        />
      </div>
      {values.img2 && (
        <img className={styles.mainImg} src={values.img2} alt="mainImg" />
      )}
      <div className={styles.inputLine}>
        <span className={styles.title}>Картинка 3</span>
        <input
          className={styles.inputText}
          type="text"
          name="img3"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.allImages[2] || ""}
        />
      </div>
      {values.img3 && (
        <img className={styles.mainImg} src={values.img3} alt="mainImg" />
      )}
      <div className={styles.inputLine}>
        <span className={styles.title}>Картинка 4</span>
        <input
          className={styles.inputText}
          type="text"
          name="img4"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          placeholder={item.allImages[3] || ""}
        />
      </div>
      {values.img4 && (
        <img className={styles.mainImg} src={values.img4} alt="mainImg" />
      )}
      <button className={styles.addButton} type="submit">
        Изменить
      </button>
    </form>
  );
}
