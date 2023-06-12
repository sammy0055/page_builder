import styles from "./selector.module.css";

interface SelectorProps {
  fontSize?: number;
  fontWeight?: number;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  label: string;
  selectOptionData: number[];
}
export const Selector: React.FC<SelectorProps> = ({
  fontSize,
  fontWeight,
  handleChange,
  label,
  selectOptionData,
}) => {
  return (
    <div className={styles.Container}>
      <span className={styles.Size}>
        <label>{label}</label>
      </span>

      <span>
        <input
          value={fontSize || fontWeight}
          onChange={handleChange}
          className={styles.SizeContainerInput}
        />
        <select
          className={styles.SizeSelector}
          onChange={handleChange}
          name="size"
          id="size"
        >
          {selectOptionData.map((size) => (
            <option value={size}>{size}</option>
          ))}
        </select>
      </span>
    </div>
  );
};
