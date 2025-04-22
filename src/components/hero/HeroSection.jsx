import React from "react";
import styles from "./Hero.module.css";
import logo from "./img/logo.svg";
import infoLogo_1 from "./img/infoLogo-1.svg";
import infoLogo_2 from "./img/infoLogo-2.svg";
import infoLogo_3 from "./img/infoLogo-3.svg";
import arrow from "./img/arrow.svg";
import women_1 from "./../../images/women-1.png";
import women_2 from "./../../images/women-2.png";
import women_3 from "./../../images/women-3.png";

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
              <div className={styles.info_logo}>
                <img alt="logo-1" src={infoLogo_1} />
              </div>

              <div className={styles.info_text}>
                Beautiful, comfortable loungewear for day or night.
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.info_logo}>
                <img alt="logo-2" src={infoLogo_2} />
              </div>

              <div className={styles.info_text}>
                No wasteful extras, like tags or plastic packaging.
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.info_logo}>
                <img alt="logo-3" src={infoLogo_3} />
              </div>

              <div className={styles.info_text}>
                Our signature fabric is incredibly comfortable — unlike anything
                you’ve ever felt.
              </div>
            </div>

            <button className={styles.btn} type="submit">
              <div className={styles.btn_content}>
                <span className={styles.btn_text}>Customize Your Outfit</span>
                <img alt="arrow" src={arrow} />
              </div>
            </button>
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
