import React, { useState } from "react";
import styles from "./ReviewSlider.module.css";
import arrow_left from "./../../images/arrow-left.svg";
import arrow_right from "./../../images/arrow-right.svg";

const reviews = [
  {
    id: 1,
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    id: 2,
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
  },
  {
    id: 3,
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    id: 4,
    name: "John, S.",
    text: "New comment",
  },
];

const ReviewSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, reviews.length - visibleCount));
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount);

  return (
    <div className={styles.sliderWrap}>
      <button
        className={styles.arrow}
        onClick={handlePrev}
        disabled={startIndex === 0}
      >
        <img alt="arrow-left" src={arrow_left} />
      </button>

      <div className={styles.slider}>
        {visibleReviews.map((review) => (
          <div key={review.id} className={styles.card}>
            <div className={styles.avatar} />
            <div className={styles.stars}>★★★★★</div>
            <h4 className={styles.name}>{review.name}</h4>
            <p className={styles.text}>{review.text}</p>
          </div>
        ))}
      </div>

      <button
        className={styles.arrow}
        onClick={handleNext}
        disabled={startIndex + visibleCount >= reviews.length}
      >
        <img alt="arrow-right" src={arrow_right} />
      </button>
    </div>
  );
};

export default ReviewSlider;
