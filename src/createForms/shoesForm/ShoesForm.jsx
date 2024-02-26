import React, { useState } from "react";
import styles from "./ShoesForm.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ShoesForm() {
  const navigate = useNavigate();

  const shoesParams = {
    category: ["Повседневная", "Теромстойкая", "Влагостойкая"],
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
    material: "",
    pad: "",
    toeCap: "",
    insole: "",
    sole: "",
    fasteningMethod: "",
    sizes: "",
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
      shoesParams.checkParams(values.category, values.season, values.gender)
    ) {
      try {
        const { img1, img2, img3, img4 } = values;
        const tempImageArray = [img1, img2, img3, img4];
        const imgArray = removeEmptyElements(tempImageArray);

        await axios
          .post("https://giras-backend-ruzal-02.amvera.io/shoes/create", {
            name: values.name,
            price: values.price,
            color: values.color,
            standard: values.standard,
            material: values.material,
            pad: values.pad,
            toeCap: values.toeCap,
            insole: values.insole,
            sole: values.sole,
            fasteningMethod: values.fasteningMethod,
            sizes: values.sizes,
            averageVolume: values.averageVolume,
            averageWeight: values.averageWeight,
            packing: values.packing,
            category: values.category,
            season: values.season,
            gender: values.gender,
            mainImg: values.mainImg,
            allImages: imgArray,
          })
          .then(navigate("/shoes"));
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
        <span className={styles.title}>Подкладка</span>
        <input
          className={styles.inputText}
          type="text"
          name="pad"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      </div>
      
      <div className={styles.inputLine}>
        <span className={styles.title}>Носок</span>
        <input
          className={styles.inputText}
          type="text"
          name="toeCap"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Стелька</span>
        <input
          className={styles.inputText}
          type="text"
          name="insole"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Подошва</span>
        <input
          className={styles.inputText}
          type="text"
          name="sole"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
      </div>

      <div className={styles.inputLine}>
        <span className={styles.title}>Способ крепления</span>
        <input
          className={styles.inputText}
          type="text"
          name="fasteningMethod"
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
