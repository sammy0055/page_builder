import { Chips } from "./chip";
export const Chip: React.FC<{ label: string }> = ({ label }) => {
  return <Chips>{label}</Chips>;
};
