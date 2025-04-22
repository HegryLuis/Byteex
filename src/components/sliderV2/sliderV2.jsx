import React, { useState } from "react";
import styles from "./silderV2.module.css";

const SliderV2 = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getSideImages = () => {
    const leftIndex = (currentIndex + 1) % images.length;
    const rightIndex = (currentIndex + 2) % images.length;
    return [leftIndex, rightIndex];
  };

  const [leftIndex, rightIndex] = getSideImages();

  return (
    <div className={styles.slider}>
      <div className={styles.image_wrapper}>
        {/* Top Left Thumbnail */}
        <img
          src={images[leftIndex]}
          alt={`thumb-${leftIndex}`}
          onClick={() => setCurrentIndex(leftIndex)}
          className={`${styles.thumbnail} ${styles.top_left}`}
        />

        {/* Main Image */}
        <img
          src={images[currentIndex]}
          alt={`main-${currentIndex}`}
          className={styles.main_image}
        />

        {/* Bottom Right Thumbnail */}
        <img
          src={images[rightIndex]}
          alt={`thumb-${rightIndex}`}
          onClick={() => setCurrentIndex(rightIndex)}
          className={`${styles.thumbnail} ${styles.bottom_right}`}
        />
      </div>
    </div>
  );
};

export default SliderV2;
