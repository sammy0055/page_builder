import React from "react";
import styles from "./iconwrapper.module.css";

interface IconWrapperProps {
  icon: JSX.Element;
}
export const IconWrapper: React.FC<IconWrapperProps> = ({ icon }) => {
  return <button disabled={false} className={styles.Wrapper}>{icon}</button>;
};
