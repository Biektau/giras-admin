import React, { useState } from "react";
import styles from "./WorkWearForm.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function WorkWearForm() {
  const navigate = useNavigate();

  const workWearParams = {
    category: [
      "Рабочая",
      "Влагозащитная",
      "От повышенных температур",
      "Для сферы услуг",
      "Трикотаж и головные уборы",
    ],
    season: ["Летний", "Зимний"],
    gender: ["Мужской", "Женский"],
    checkParams: function (category, season, gender) {
      if (this.category.includes(category) === false) {
        alert("Неверно указана категория");
        return false;
      }
      if (this.season.includes(season) === false) {
        alert("Неверно указан сезон");
        return false;
      }
      if (this.gender.includes(gender) === false) {
        alert("Неверно указан пол");
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
    set: "",
    series: "",
    protectionClass: "",
    material: "",
    veryfied: "",
    sizes: "",
    heights: "",
    averageVolume: "",
    averageWeight: "",
    packing: "",
    category: "",
    season: "",
    gender: "",
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
    if (
      workWearParams.checkParams(values.category, values.season, values.gender)
    ) {
      try {
        const { img1, img2, img3, img4 } = values;
        const tempImageArray = [img1, img2, img3, img4];
        const imgArray = removeEmptyElements(tempImageArray);

        await axios
          .post("https://giras-backend-ruzal-02.amvera.io/workWear/create", {
            name: values.name,
            price: values.price,
            color: values.color,
            standard: values.standard,
            set: values.set,
            series: values.series,
            protectionClass: values.protectionClass,
            material: values.material,
            veryfied: values.veryfied,
            sizes: values.sizes,
            heights: values.heights,
            averageVolume: values.averageVolume,
            averageWeight: values.averageWeight,
            packing: values.packing,
            category: values.category,
            season: values.season,
            gender: values.gender,
            mainImg: values.mainImg,
            allImages: imgArray,
          })
          .then(navigate("/workWear"));
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
        <span className={styles.title}>Наименование одежды</span>
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
        <span className={styles.title}>Комплектация</span>
        <input
          className={styles.inputText}
          type="text"
          name="set"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
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
        />
      </div>
      <div className={styles.inputLine}>
        <span className={styles.title}>Класс защиты</span>
        <input
          className={styles.inputText}
          type="text"
          name="protectionClass"
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
        <span className={styles.title}>Минпромторг</span>
        <input
          className={styles.inputText}
          type="text"
          name="veryfied"
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
        <span className={styles.title}>Ростовки</span>
        <input
          className={styles.inputText}
          type="text"
          name="heights"
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
        <span className={styles.title}>Сезон</span>
        <input
          className={styles.inputText}
          type="text"
          name="season"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      </div>
      <div className={styles.inputLine}>
        <span className={styles.title}>Пол</span>
        <input
          className={styles.inputText}
          type="text"
          name="gender"
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
