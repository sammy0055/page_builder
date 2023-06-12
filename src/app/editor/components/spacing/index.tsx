import { Chip } from "../chip";
import { Input } from "../input";

interface SpacingProps {
  label: string ;
  value: string| number;
  name?:
    | "marginRight"
    | "marginLeft"
    | "marginTop"
    | "marginBottom"
    | "paddingTop"
    | "paddingBottom"
    | "paddingRight"
    | "paddingLeft";
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Spacing: React.FC<SpacingProps> = ({
  label,
  value,
  name,
  handleChange,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <Chip label={label} />
      <Input value={value} name={name} handleChange={handleChange} />
    </div>
  );
};
