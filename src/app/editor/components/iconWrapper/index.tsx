import React from "react";
import styles from "./iconwrapper.module.css";

interface IconWrapperProps {
  icon: JSX.Element;
  handleChange?: () => void;
}
export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  handleChange,
}) => {
  return (
    <button
      onClick={handleChange}
      disabled={false}
      className={styles.Wrapper}
    >
      {icon}
    </button>
  );
};
