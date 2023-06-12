import { useCustomStyles } from "@/hooks/custom-styles";
import styles from "./slider.module.css";

interface SliderProps {
  label: "margin" | "padding";
}

export const Slider: React.FC<SliderProps> = ({ label }) => {
  const { margin, padding, handleChangeSpacing } = useCustomStyles();
  const value = label === "margin" ? margin : padding;
  
  return (
    <div className={`${styles["slider-container"]}`}>
      <label>{label}</label>
      <div>{value}</div>
      <input
        type="range"
        className={styles.slider}
        value={value || 0}
        name={label}
        aria-label="Default"
        onChange={handleChangeSpacing}
      />
    </div>
  );
};
