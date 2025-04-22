import React from "react";
import styles from "./Reviews.module.css";
import women_1 from "./../../images/women-1.png";
import women_2 from "./../../images/women-2.png";
import women_3 from "./../../images/women-3.png";
import women_4 from "./../../images/women-4.png";
import women_5 from "./../../images/women-5.png";
import women_6 from "./../../images/women-6.png";
import women_7 from "./../../images/women-7.png";
import women_8 from "./../../images/women-8.png";
import women_9 from "./../../images/women-9.png";
import women_10 from "./../../images/women-10.png";
import women_11 from "./../../images/women-11.png";
import women_12 from "./../../images/women-12.png";
import women_13 from "./../../images/women-13.png";
import ReviewSlider from "../reviewSlider/ReviewSlider";
import CustomizeButton from "../customizeButton/CustomizeButton";

const Reviews = ({ stars }) => {
  const images = [
    women_1,
    women_2,
    women_3,
    women_4,
    women_5,
    women_6,
    women_7,
    women_8,
    women_9,
    women_10,
    women_11,
    women_12,
    women_13,
    women_1,
    women_2,
    women_3,
    women_4,
    women_5,
    women_6,
    women_7,
    women_8,
    women_9,
    women_10,
    women_11,
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>What are our fans saying?</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat. Fusce non nibh luctus.
          </h3>
        </div>
      </div>

      <div className={styles.wrap_grid}>
        <div className={styles.grid}>
          {images.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt={`review-${index}`}
                className={styles.img}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.container}>
        <ReviewSlider />

        <div className={styles.footer}>
          <CustomizeButton />

          <div className={styles.rating}>
            <div>{stars}</div>
            <span>One of 500+ 5 Star Reviews Online</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
