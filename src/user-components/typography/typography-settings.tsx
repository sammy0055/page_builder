import { Selector } from "@/app/editor/components/selector";
import { ColorPicker } from "@/app/editor/components/colorPicker";
import Dropdown from "@/app/editor/components/dropdown";
import { Dimention } from "@/app/editor/components/dimension";
import { Slider } from "@/app/editor/components/slider";
import { useCustomStyles } from "@/hooks/custom-styles";
import { Select } from "@/app/editor/components/select";
import { useTypographySettings } from "@/hooks/typography";
export const TypographySettings = () => {
  const {
    handleChangeSpacing,
    handleChangeColorPicker,
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    paddingRight,
    paddingLeft,
    marginRight,
    marginLeft,
    color,
  } = useCustomStyles();

  const { fontSize, fontWeight, handleTypographySettings } =
    useTypographySettings();

  const fontSizesArray: number[] = [12, 14, 16, 18, 20, 24, 28, 32, 36, 40];
  const fontWeights: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  const dimensionsValue: any = {
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    paddingRight,
    paddingLeft,
    marginRight,
    marginLeft,
  };
  return (
    <>
      <Dropdown label="Typography">
        <Selector
          fontSize={fontSize}
          handleChange={handleTypographySettings}
          label="size"
          name="fontSize"
          selectOptionData={fontSizesArray}
        />
        <Selector
          fontWeight={fontWeight}
          handleChange={handleTypographySettings}
          label="weight"
          name="fontWeight"
          selectOptionData={fontWeights}
        />
        <Select
          selectOptionData={["p", "h1", "h2", "h3"]}
          name={"tagName"}
          handleChange={handleTypographySettings}
        />
        <ColorPicker
          color={color}
          handleChange={(newColor) =>
            handleChangeColorPicker(newColor, "color")
          }
        />
      </Dropdown>
      <Dropdown label="spacing">
        <Dimention
          dimensionsValue={dimensionsValue}
          handleChange={handleChangeSpacing}
        />
        <Slider label="margin" />
        <Slider label="padding" />
      </Dropdown>
    </>
  );
};
