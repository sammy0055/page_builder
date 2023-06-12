import { HexColorPicker } from "react-colorful";
import styles from "./colorpicker.module.css";
interface ColorPickerprops {
  color: string;
  handleChange: (newColor: string) => void;
}
export const ColorPicker: React.FC<ColorPickerprops> = ({
  color,
  handleChange,
}) => {
  return (
    <div className={styles.ColorPicker}>
      <HexColorPicker
        style={{ width: "100%" }}
        color={color}
        onChange={handleChange}
      />
      <input
        className={styles.pickerInput}
        value={color}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
