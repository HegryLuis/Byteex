import React from "react";
import styles from "./Hero.module.css";
import logo from "./../../images/logo.svg";
import small_Logo_1 from "./../../images/small_Logo_1.svg";
import small_Logo_2 from "./../../images/small_Logo_2.svg";
import small_Logo_3 from "./../../images/small_Logo_3.svg";
import women_1 from "./../../images/women-1.png";
import women_2 from "./../../images/women-2.png";
import women_3 from "./../../images/women-3.png";
import LogoWrapper from "../logoWrapper/LogoWrapper";
import CustomizeButton from "../customizeButton/CustomizeButton";

const HeroSection = () => {
  return (
    <>
      <div className="wrap">
        <img alt="wrap_logo" src={logo} />
        <div className={styles.content}>
          <div className={styles.info_block}>
            <div className={styles.title}>
              Don’t apologize for being comfortable.
            </div>
            <div className={styles.info}>
              <LogoWrapper img={small_Logo_1} />

              <div className={styles.info_text}>
                Beautiful, comfortable loungewear for day or night.
              </div>
            </div>

            <div className={styles.info}>
              <LogoWrapper img={small_Logo_2} />

              <div className={styles.info_text}>
                No wasteful extras, like tags or plastic packaging.
              </div>
            </div>

            <div className={styles.info}>
              <LogoWrapper img={small_Logo_3} />

              <div className={styles.info_text}>
                Our signature fabric is incredibly comfortable — unlike anything
                you’ve ever felt.
              </div>
            </div>

            <CustomizeButton />
          </div>

          <div className={styles.images_container}>
            <div
              className={`${styles.images_section_1} ${styles.images_section}`}
            >
              <img alt="women-1" src={women_1} />
            </div>

            <div
              className={`${styles.images_section} ${styles.images_section_2}`}
            >
              <img alt="women-2" src={women_2} />
              <img alt="women-3" src={women_3} />
            </div>

            <div
              className={`${styles.images_section} ${styles.images_section_3}`}
            >
              <div className={styles.empty_img}></div>
              <div className={styles.empty_img}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
