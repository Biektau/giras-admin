import React, { useState } from "react";
import styles from "./GlovesForm.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GlovesForm() {
  const navigate = useNavigate();

  const glovesParams = {
    category: [
      "Трикотажные",
      "От пониженных температур",
      "Рукавицы / Вачеги",
      "От механических воздействий",
      "Краги",
      "Спилковые",
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
    name: "",
    price: "",
    color: "",
    standard: "",
    material: "",
    base: "",
    coating: "",
    cuff: "",
    sizes: "",
    averageVolume: "",
    averageWeight: "",
    packing: "",
    category: "",
    mainImg: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
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
    if (glovesParams.checkParams(values.category)) {
      try {
        const { img1, img2, img3, img4 } = values;
        const tempImageArray = [img1, img2, img3, img4];
        const imgArray = removeEmptyElements(tempImageArray);

        await axios
          .post("https://girasbackend.onrender.com/gloves/create", {
            name: values.name,
            price: values.price,
            color: values.color,
            standard: values.standard,
            material: values.material,
            base: values.base,
            coating: values.coating,
            cuff: values.cuff,
            sizes: values.sizes,
            averageVolume: values.averageVolume,
            averageWeight: values.averageWeight,
            packing: values.packing,
            category: values.category,
            mainImg: values.mainImg,
            allImages: imgArray,
          })
          .then(navigate("/gloves"));
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
        <span className={styles.title}>Наименование перчаток</span>
        <input
          className={styles.inputText}
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
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
        />
      </div>
      <div className={styles.inputLine}>
        <span className={styles.title}>Цвет</span>
        <input
          className={styles.inputText}
          type="text"
          name="color"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
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
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Материал</span>
        <input
          className={styles.inputText}
          type="text"
          name="material"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Основа</span>
        <input
          className={styles.inputText}
          type="text"
          name="base"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Покрытие</span>
        <input
          className={styles.inputText}
          type="text"
          name="coating"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Манжет</span>
        <input
          className={styles.inputText}
          type="text"
          name="cuff"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Размеры</span>
        <input
          className={styles.inputText}
          type="text"
          name="sizes"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
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
        />
      </div>
      <div className={styles.inputLine}>
        <span className={styles.title}>Упаковка</span>
        <input
          className={styles.inputText}
          type="text"
          name="packing"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
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
        />
      </div>
      {values.img4 && (
        <img className={styles.mainImg} src={values.img4} alt="mainImg" />
      )}
      <button className={styles.addButton} type="submit">
        Добавить
      </button>
    </form>
  );
}
