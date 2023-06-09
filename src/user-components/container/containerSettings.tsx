import { ColorPicker } from "@/app/editor/components/colorPicker";
import { Dimention } from "@/app/editor/components/dimension";
import Dropdown from "@/app/editor/components/dropdown";
import { Slider } from "@/app/editor/components/slider";
import { useCustomStyles } from "@/hooks/custom-styles";
export const ContainerSettings = () => {
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
    backgroundColor,
  } = useCustomStyles();

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
      <Dropdown label="backgroundColor">
        <ColorPicker
          color={backgroundColor}
          handleChange={(newColor) =>
            handleChangeColorPicker(newColor, "backgroundColor")
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
