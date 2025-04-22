import React from "react";
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

const Benefits = () => {
  const woman = [women_1, women_2, women_3];

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.header_title}>as seen in</span>

            <div className={styles.brand_block}>
              <img src={brand_1} alt="brand-1" className={styles.brand_logo} />
              <img src={brand_2} alt="brand-2" className={styles.brand_logo} />
              <img src={brand_3} alt="brand-3" className={styles.brand_logo} />
              <img src={brand_4} alt="brand-4" className={styles.brand_logo} />
              <img src={brand_5} alt="brand-5" className={styles.brand_logo} />
            </div>
          </div>

          <div className={styles.benefits_wrap}>
            <div className={styles.benefits_content}>
              <h1 className={styles.title}>Loungewear you can be proud of.</h1>
              <div className={styles.benefits_block}>
                <LogoWrapper img={smallLogo_1} />
                <div className={styles.block_text}>
                  <h3>Ethically sourced.</h3>
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.{" "}
                  </span>
                </div>
              </div>

              <div className={styles.benefits_block}>
                <LogoWrapper img={smallLogo_2} />
                <div className={styles.block_text}>
                  <h3>Ethically sourced.</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.{" "}
                  </span>
                </div>
              </div>

              <div className={styles.benefits_block}>
                <LogoWrapper img={smallLogo_3} />
                <div className={styles.block_text}>
                  <h3>Ethically sourced.</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.{" "}
                  </span>
                </div>
              </div>

              <div className={styles.benefits_block}>
                <LogoWrapper img={smallLogo_4} />
                <div className={styles.block_text}>
                  <h3>Ethically sourced.</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.{" "}
                  </span>
                </div>
              </div>
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
