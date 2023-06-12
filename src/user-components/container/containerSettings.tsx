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
console.log('====================================');
console.log(backgroundColor);
console.log('====================================');
  return (
    <>
      <Dropdown label="backgroundColor">
        <ColorPicker
          color={backgroundColor}
          handleChange={handleChangeColorPicker}
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
