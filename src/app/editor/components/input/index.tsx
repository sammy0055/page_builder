import styles from "./input.module.css";

interface InputProps {
  value: string | number;
  name?: string;
  small?: "30px";
  medium?: "50px";
  big?: "70px";
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  value,
  name,
  handleChange,
  small,
  medium,
  big,
}) => {
//   const width = small || medium || big || "auto";
  return (
    <div className={styles.InputContainer}>
      <input
        className={styles.Input}
        style={{ width: "30px" }}
        value={value}
        name={name}
        onChange={handleChange}
      />
      <span className={styles.Tag}>PX</span>
    </div>
  );
};
