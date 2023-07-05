import { Typography } from "@/user-components/typography";
import styles from "./newsbar.module.css";
import { Element } from "@craftjs/core";

export const NewsBar: React.FC = () => {
  return (
    <>
      <Element is="div" id="same" className={styles.Container}>
        <Typography tagName="p" />
      </Element>
    </>
  );
};
