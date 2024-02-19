import React from "react";
import styles from "./ShoesItemInfoForm.module.scss";

export default function ShoesItemInfoForm({ item }) {
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
        <span className={styles.title}>Подкладка:</span>
        <span className={styles.fieldValue}>{item.pad}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Носок:</span>
        <span className={styles.fieldValue}>{item.toeCap}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Стелька:</span>
        <span className={styles.fieldValue}>{item.insole}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Подошва:</span>
        <span className={styles.fieldValue}>{item.sole}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Способ крепления:</span>
        <span className={styles.fieldValue}>{item.fasteningMethod}</span>
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
      <div className={styles.dataLine}>
        <span className={styles.title}>Сезон:</span>
        <span className={styles.fieldValue}>{item.season}</span>
      </div>
      <div className={styles.dataLine}>
        <span className={styles.title}>Пол:</span>
        <span className={styles.fieldValue}>{item.gender}</span>
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
