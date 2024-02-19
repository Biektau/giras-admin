import React, { useState } from "react";
import styles from "./CreateForm.module.scss";
import CustomButton from "../customButton/CustomButton";
import { IoAddCircleOutline } from "react-icons/io5";

export default function CreateForm() {
  const currentUrl = window.location.pathname.split("/");
  const validValues = {
    categories: [
      "Любая",
      "Рабочая",
      "Влагозащитная",
      "От повышенных температур",
      "Для сферы услуг",
      "Трикотаж и головные уборы",
    ],
    seasons: ["Летний", "Зимний"],
    genders: ["Мужской", "Женский"],
  };

  const [data, setData] = useState({
    code: "",
    price: "",
    name: "",
    veryfied: "",
    category: "",
    season: "",
    material: "",
    gender: "",
    set: "",
    color: "",
    standart: "",
    collection: "",
    sizes: "",
    heights: "",
  });

  const [mainImg, setMainImg] = useState("");
  const [allImages, setAllImages] = useState([]);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImg(URL.createObjectURL(file));
  };

  const handleAllImagesChange = (e) => {
    const files = e.target.files;
    const urlsArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setAllImages(urlsArray);
  };

  const handleValidation = () => {
    const { category, season, gender } = data;

    if (validValues.categories.includes(category) === false) {
      alert("Неверно введена категория товара");
    } else if (validValues.seasons.includes(season) === false) {
      alert("Неверно введен сезон");
    } else if (validValues.genders.includes(gender) === false) {
      alert("Неверно введен пол");
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Работает");
    }
  };

  return (
    <form
      className={styles.form}
      action=""
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className={styles.wrapper}>
        <div className={styles.side}>
          <div className={styles.inputWrapper}>
            <label htmlFor="code">Артикул</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="price">Цена</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">Наименование</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="veryfied">Минпромторг</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="category">Категория</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="season">Сезон</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="material">Материал</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.side}>
          <div className={styles.inputWrapper}>
            <label htmlFor="season">Пол</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="set">Комплектация</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="color">Цвет</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="standart">ГОСТ</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="collection">Коллекция</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="sizes">Размеры</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="heights">Ростовки</label>
            <input type="text" onChange={(e) => handleChange(e)} />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.side}>
          <div className={styles.inputWrapper}>
            <label htmlFor="mainImg">Главная картинка</label>
            <input type="file" onChange={handleMainImageChange} />
            {mainImg && <img src={mainImg} alt="Preview" />}
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="allImages">Все картинки</label>
            <input type="file" multiple onChange={handleAllImagesChange} />
            <div className={styles.prevWrapper}>
              {allImages.map((imageUrl) => (
                <img
                  src={imageUrl}
                  alt="Preview"
                  key={imageUrl}
                  onChange={handleAllImagesChange}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CustomButton
        to={`/${currentUrl[1]}`}
        icon={<IoAddCircleOutline />}
        text="Добавить"
        backColor="#8ec07c"
      />
    </form>
  );
}
