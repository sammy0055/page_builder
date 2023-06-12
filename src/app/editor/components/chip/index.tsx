import styles from "./chip.module.css";
export const Chip: React.FC<{ label: string }> = ({ label }) => {
  return <span className={styles.Chip}>{label}</span>;
};
