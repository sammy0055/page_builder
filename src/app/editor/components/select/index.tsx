interface SelectProps {
  selectOptionData: string[];
  name: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export const Select: React.FC<SelectProps> = ({
  selectOptionData,
  name,
  handleChange,
}) => {
  return (
    <select name={name} onChange={handleChange}>
      {selectOptionData.map((size, index) => (
        <option key={index} value={size}>
          {size}
        </option>
      ))}
    </select>
  );
};
