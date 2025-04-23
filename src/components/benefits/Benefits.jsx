import React, { useEffect, useState } from "react";
import styles from "./Benefits.module.css";
import brand_1 from "./../../images/brand-1.png";
import brand_2 from "./../../images/brand-2.png";
import brand_3 from "./../../images/brand-3.png";
import brand_4 from "./../../images/brand-4.png";
import brand_5 from "./../../images/brand-5.png";
import LogoWrapper from "../logoWrapper/LogoWrapper";
import smallLogo_1 from "./../../images/small_Logo_1.svg";
import smallLogo_2 from "./../../images/small_Logo_2.svg";
import smallLogo_3 from "./../../images/small_Logo_3.svg";
import smallLogo_4 from "./../../images/small_Logo_4.svg";
import Slider from "../slider/Slider";
import women_1 from "./../../images/women-1.png";
import women_2 from "./../../images/women-2.png";
import women_3 from "./../../images/women-3.png";

const benefitsData = [
  {
    img: smallLogo_1,
    title: "Ethically sourced.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    img: smallLogo_2,
    title: "Ethically sourced.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    img: smallLogo_3,
    title: "Ethically sourced.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    img: smallLogo_4,
    title: "Ethically sourced.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
];

const Benefits = () => {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const woman = [women_1, women_2, women_3];
  const brands = [brand_1, brand_2, brand_3, brand_4, brand_5];

  const visibleBrandsCount = 3;
  const totalSlides = Math.ceil(brands.length / visibleBrandsCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const visibleBrands = brands.slice(
    currentBrandIndex * visibleBrandsCount,
    currentBrandIndex * visibleBrandsCount + visibleBrandsCount
  );

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.header_title}>as seen in</span>

            <div className={styles.brand_block}>
              {visibleBrands.map((brand, index) => {
                return (
                  <img
                    key={index}
                    src={brand}
                    alt={`brand-${index}`}
                    className={styles.brand_logo}
                  />
                );
              })}
            </div>

            <div className={styles.dots}>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${
                    index === currentBrandIndex ? styles.active : ""
                  }`}
                  onClick={() => setCurrentBrandIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className={styles.benefits_wrap}>
            <div className={styles.benefits_content}>
              <h1 className={styles.title}>Loungewear you can be proud of.</h1>

              {benefitsData.map((benefit, index) => (
                <div key={index} className={styles.benefits_block}>
                  <LogoWrapper img={benefit.img} />
                  <div className={styles.block_text}>
                    <h3>{benefit.title}</h3>
                    <span>{benefit.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.slider_wrapper}>
              <Slider images={woman} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
