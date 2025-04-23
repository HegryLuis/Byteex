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
import ImagesAlbum from "../imagesAlbum/ImagesAlbum";

const infoItems = [
  {
    img: small_Logo_1,
    text: "Beautiful, comfortable loungewear for day or night.",
  },
  {
    img: small_Logo_2,
    text: "No wasteful extras, like tags or plastic packaging.",
  },
  {
    img: small_Logo_3,
    text: "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.",
  },
];

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

            {infoItems.map((item, index) => (
              <div key={index} className={styles.info}>
                <LogoWrapper img={item.img} />
                <div className={styles.info_text}>{item.text}</div>
              </div>
            ))}

            <CustomizeButton />
          </div>

          <ImagesAlbum images={[women_1, women_2, women_3]} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
