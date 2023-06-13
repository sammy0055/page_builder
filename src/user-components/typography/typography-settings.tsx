import { Selector } from "@/app/editor/components/selector";
import { ColorPicker } from "@/app/editor/components/colorPicker";
import Dropdown from "@/app/editor/components/dropdown";
import { Dimention } from "@/app/editor/components/dimension";
import { Slider } from "@/app/editor/components/slider";
import { useCustomStyles } from "@/hooks/custom-styles";
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
    fontSize,
    fontWeight,
  } = useCustomStyles();

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
          handleChange={handleChangeSpacing}
          label="size"
          name="fontSize"
          selectOptionData={fontSizesArray}
        />
        <Selector
          fontWeight={fontWeight}
          handleChange={handleChangeSpacing}
          label="weight"
          name="fontWeight"
          selectOptionData={fontWeights}
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
