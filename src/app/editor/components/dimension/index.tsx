import { Spacing as dimension } from "@/types";
import styles from "./dimension.module.css";
import { Spacing } from "@/app/editor/components/spacing";

interface DimentionsProps {
  dimensionsValue: dimension;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Dimention: React.FC<DimentionsProps> = ({
  dimensionsValue,
  handleChange,
}) => {
  const {
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    paddingRight,
    paddingLeft,
    marginRight,
    marginLeft,
  } = dimensionsValue;
  return (
    <>
      <div className={styles.SpacingContainer}>
        <Spacing
          label="margin T"
          value={marginTop}
          name="marginTop"
          handleChange={handleChange}
        />
        <Spacing
          label="margin B"
          value={marginBottom}
          name="marginBottom"
          handleChange={handleChange}
        />
      </div>

      <div className={styles.SpacingContainer}>
        <Spacing
          label="margin R"
          value={marginRight}
          name="marginRight"
          handleChange={handleChange}
        />
        <Spacing
          label="margin L"
          value={marginLeft}
          name="marginLeft"
          handleChange={handleChange}
        />
      </div>

      <div className={styles.SpacingContainer}>
        <Spacing
          label="paddin T"
          value={paddingTop}
          name="paddingTop"
          handleChange={handleChange}
        />
        <Spacing
          label="paddin B"
          value={paddingBottom}
          name="paddingBottom"
          handleChange={handleChange}
        />
      </div>

      <div className={styles.SpacingContainer}>
        <Spacing
          label="paddin R"
          name="paddingRight"
          value={paddingRight}
          handleChange={handleChange}
        />
        <Spacing
          label="paddin L"
          name="paddingLeft"
          value={paddingLeft}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};
