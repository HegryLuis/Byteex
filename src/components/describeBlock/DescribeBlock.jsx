import React from "react";
import styles from "./DescribeBlock.module.css";
import smallLogo_1 from "./../../images/small_Logo_1.svg";
import smallLogo_2 from "./../../images/small_Logo_2.svg";
import smallLogo_5 from "./../../images/small_Logo_5.svg";
import CustomizeButton from "../customizeButton/CustomizeButton";

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
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Comfort made easy</h2>

      <div className={styles.content_wrap}>
        {steps.map((step, index) => {
          const bgClass = index === 1 ? styles.beige : styles.gray;

          return (
            <div key={index} className={`${styles.content_block} ${bgClass}`}>
              <div className={styles.img_wrap}>
                <img alt="logo" src={step.img} />
              </div>
              <h3 className={styles.block_title}>{step.title}</h3>
              <span>{step.text}</span>
            </div>
          );
        })}
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
