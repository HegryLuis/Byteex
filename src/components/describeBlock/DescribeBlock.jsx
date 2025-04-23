import React, { useEffect, useState } from "react";
import styles from "./DescribeBlock.module.css";
import smallLogo_1 from "./../../images/small_Logo_1.svg";
import smallLogo_2 from "./../../images/small_Logo_2.svg";
import smallLogo_5 from "./../../images/small_Logo_5.svg";
import CustomizeButton from "../customizeButton/CustomizeButton";
import arrow_left from "./../../images/arrow-left.svg";
import arrow_rigth from "./../../images/arrow-right.svg";

const steps = [
  {
    img: smallLogo_2,
    title: "You save.",
    text: "Browse our comfort sets and save 15% when you bundle.",
  },
  {
    img: smallLogo_5,
    title: "We ship.",
    text: "We ship your items within 1-2 days of receiving your order.",
  },
  {
    img: smallLogo_1,
    title: "You enjoy!",
    text: "Wear hernest around the house, out on the town, or in bed..",
  },
];

const DescribeBlock = ({ stars }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comfort made easy</h2>

      <div className={styles.slider_wrapper}>
        <button className={styles.arrow} onClick={prevSlide}>
          <img alt="arrow-left" src={arrow_left} />
        </button>

        <div className={styles.slider_content}>
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            const bgClass = index === 1 ? styles.beige : styles.gray;
            return (
              <div
                key={index}
                className={`${styles.content_block} ${bgClass} ${
                  isActive ? styles.active : styles.hidden
                }`}
              >
                <div className={styles.img_wrap}>
                  <img alt="logo" src={step.img} />
                </div>
                <h3 className={styles.block_title}>{step.title}</h3>
                <span>{step.text}</span>
              </div>
            );
          })}
        </div>

        <button className={styles.arrow} onClick={nextSlide}>
          <img alt="arrow-right" src={arrow_rigth} />
        </button>
      </div>

      <div className={styles.dots}>
        {steps.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.active_dot : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className={styles.footer}>
        <CustomizeButton />

        <div className={styles.rating}>
          <div>{stars}</div>
          <span>One of 500+ 5 Star Reviews Online</span>
        </div>
      </div>
    </div>
  );
};

export default DescribeBlock;
