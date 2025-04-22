import React, { useState } from "react";
import styles from "./Slider.module.css";
import arrow_left from "./../../images/arrow-left.svg";
import arrow_right from "./../../images/arrow-right.svg";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.image_wrapper}>
        <button className={styles.arrow} onClick={prevImage}>
          <img alt="prev" src={arrow_left} />
        </button>

        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className={styles.main_image}
        />

        <button className={styles.arrow} onClick={nextImage}>
          <img alt="prev" src={arrow_right} />
        </button>

        <div className={styles.thumbnail_container}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              onClick={() => selectImage(index)}
              className={`${styles.thumbnail} ${
                index === currentIndex ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
