import React from "react";
import styles from "./InfoBanner.module.css";
import small_Logo_6 from "./../../images/small_Logo_6.svg";
import small_Logo_7 from "./../../images/small_Logo_7.svg";
import small_Logo_8 from "./../../images/small_Logo_8.svg";
import LogoWrapper from "../logoWrapper/LogoWrapper";

const InfoBanner = () => {
  const infoData = [
    { img: small_Logo_6, title: "3,927 kg", of: "of CO2 saved" },
    {
      img: small_Logo_7,
      title: "2,546,167 days",
      of: "of drinking water saved",
    },
    { img: small_Logo_8, title: "7,321 kWh", of: "of energy saved" },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.info_title}>Our total green impact</h1>

        <div className={styles.info_content}>
          {infoData.map((item, index) => {
            return (
              <div key={index} className={styles.info_block}>
                <LogoWrapper img={item.img} />

                <div className={styles.text}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <h3 className={styles.description}>{item.of}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
