import React, { useState } from "react";
import styles from "./FAQ.module.css";
import women_1 from "./../../images/women-1.png";
import women_2 from "./../../images/women-2.png";
import women_3 from "./../../images/women-3.png";

const data = [
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // первый вопрос открыт

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>Frequently asked questions.</h2>
          <div className={styles.accordion}>
            {data.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.question} onClick={() => toggle(index)}>
                  <span>{item.question}</span>
                  {openIndex === index ? <span>-</span> : <span>+</span>}
                </div>
                {openIndex === index && (
                  <div className={styles.answer}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <img
            src={women_1}
            alt="Girl 1"
            className={`${styles.img} ${styles.topRight}`}
          />
          <img
            src={women_2}
            alt="Girl 2"
            className={`${styles.img} ${styles.center}`}
          />
          <img
            src={women_3}
            alt="Girl 3"
            className={`${styles.img} ${styles.bottomLeft}`}
          />
          <div className={`${styles.empty_img} ${styles.topLeft}`}></div>
          <div className={`${styles.empty_img} ${styles.bottomRight}`}></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
