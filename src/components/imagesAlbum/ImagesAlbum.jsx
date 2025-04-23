import React from "react";
import styles from "./ImagesAlbum.module.css";

const ImagesAlbum = ({ images = [], emptyCount = 2 }) => {
  return (
    <div className={styles.images_container}>
      <div className={`${styles.images_section} ${styles.images_section_1}`}>
        {images[0] && <img src={images[0]} alt={`image-1`} />}
      </div>

      <div className={`${styles.images_section} ${styles.images_section_2}`}>
        {images.slice(1, 3).map((src, idx) => (
          <img key={idx} src={src} alt={`image-${idx + 2}`} />
        ))}
      </div>

      <div className={`${styles.images_section} ${styles.images_section_3}`}>
        {Array.from({ length: emptyCount }).map((_, idx) => (
          <div key={idx} className={styles.empty_img}></div>
        ))}
      </div>
    </div>
  );
};

export default ImagesAlbum;
