import React from "react";
import styles from "./Founder.module.css";
import SliderV2 from "../sliderV2/sliderV2";
import CustomizeButton from "../customizeButton/CustomizeButton";
import women_1 from "./../../images/women-1.png";
import women_2 from "./../../images/women-2.png";
import women_3 from "./../../images/women-3.png";

const Founder = () => {
  const woman = [women_1, women_2, women_3];

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.slider_wrap}>
          <SliderV2 images={woman} />
        </div>

        <div className={styles.content}>
          <h3>Be your best self.</h3>

          <div className={styles.text}>
            <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____.</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>

            <p>
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
              placerat volutpat ligula, ac consectetur felis varius non. Aliquam
              a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id
              arcu congue, faucibus libero nec, placerat ligula.
            </p>

            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
            </p>

            <p>
              Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
              mattis, sapien eget lobortis fringilla, eros ipsum tristique
              tellus, ac convallis urna massa at nibh.
            </p>

            <p>
              Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
              euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam
              nec in sapien.
            </p>

            <>Cras mattis varius mollis.</>
          </div>

          <div className={styles.btn_wrap}>
            <CustomizeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
