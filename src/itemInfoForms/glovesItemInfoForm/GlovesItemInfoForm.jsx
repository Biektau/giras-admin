import React from "react";
import styles from "./GlovesItemInfoForm.module.scss";

export default function GlovesItemInfoForm({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.dataLine}>
        <span className={styles.title}>Наименование:</span>
        <span className={styles.fieldValue}>{item.name}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Цена:</span>
        <span className={styles.fieldValue}>{item.price}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Цвет:</span>
        <span className={styles.fieldValue}>{item.color}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>ГОСТ:</span>
        <span className={styles.fieldValue}>{item.standard}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Материал:</span>
        <span className={styles.fieldValue}>{item.material}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Основа:</span>
        <span className={styles.fieldValue}>{item.base}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Покрытие:</span>
        <span className={styles.fieldValue}>{item.coating}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Манжет:</span>
        <span className={styles.fieldValue}>{item.cuff}</span>
      </div>

      <div className={styles.dataLine}>
        <span className={styles.title}>Размеры:</span>
        <span className={styles.fieldValue}>{item.sizes}</span>
      </div>

      <div className={styles.dataLine}>
        <span className={styles.title}>Средний объем:</span>
        <span className={styles.fieldValue}>{item.averageVolume}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Средний вес:</span>
        <span className={styles.fieldValue}>{item.averageWeight}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Упаковка:</span>
        <span className={styles.fieldValue}>{item.packing}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Категория:</span>
        <span className={styles.fieldValue}>{item.category}</span>
      </div>

      <div className={styles.dataColl}>
        <span className={styles.title}>Главная картинка:</span>
        <img className={styles.mainImg} src={item.mainImg} alt="mainImg" />
      </div>
      <div className={styles.dataColl}>
        <span className={styles.title}>Все картинки:</span>
        <div className={styles.allImagesWrapper}>
          {item.allImages.map((image, index) => (
            <img
              className={styles.allImagesItem}
              src={image}
              alt="allImages"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
