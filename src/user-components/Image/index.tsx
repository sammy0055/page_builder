import { Element } from "@craftjs/core";
import { Container } from "../container";
import styles from "./image.module.css";
import Black_fashion from "../../../public/black_fashion.jpg";

export const ImageWrapper = () => {
  return (
    <Element is={Container} id="imagewrapper">
      <img src={`${Black_fashion}`} alt="continer" className={styles.Image} />
    </Element>
  );
};
