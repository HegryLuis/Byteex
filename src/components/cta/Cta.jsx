import React from "react";
import styles from "./Cta.module.css";
import women_1 from "./../../images/women-1.png";
import women_2 from "./../../images/women-2.png";
import women_3 from "./../../images/women-3.png";
import pay_logo from "./../../images/pay_logo.png";
import small_Logo_2 from "./../../images/small_Logo_2.svg";
import small_Logo_5 from "./../../images/small_Logo_5.svg";
import small_Logo_9 from "./../../images/small_Logo_9.svg";
import clock from "./../../images/clock.svg";
import CustomizeButton from "../customizeButton/CustomizeButton";
import LogoWrapper from "../logoWrapper/LogoWrapper";
import ImagesAlbum from "../imagesAlbum/ImagesAlbum";

const Cta = () => {
  const infoData = [
    { img: small_Logo_5, text: "FREE Shipping on Orders over $200" },
    { img: small_Logo_9, text: "Over 500+ 5 Star Reviews Online" },
    { img: small_Logo_2, text: "Made ethically and responsibly." },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.text_block}>
          <h2>Find something you love.</h2>
          <h3>Click below to browse our collection and save 15% on your se.</h3>
        </div>

        <ImagesAlbum images={[women_1, women_2, women_3]} />

        <div className={styles.btn_block}>
          <div className={styles.btn_wrap}>
            <CustomizeButton />
          </div>

          <div className={styles.footer_block}>
            <div className={styles.clock}>
              <img alt="clock" src={clock} />
              <span>Ships in 1-2 Days</span>
            </div>

            <img alt="pay-logo" src={pay_logo} />
          </div>
        </div>

        <div className={styles.info_content}>
          {infoData.map((data, index) => {
            return (
              <div key={index} className={styles.info_block}>
                <LogoWrapper className={styles.logo} img={data.img} />
                <span>{data.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cta;
