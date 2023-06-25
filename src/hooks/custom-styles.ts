import { FlexProperties, displayProperties, layoutProperties } from "@/types";
import { useNode } from "@craftjs/core";

export const useCustomStyles = () => {
  const {
    actions: { setProp },
    height,
    padding,
    paddingTop,
    paddingBottom,
    margin,
    marginTop,
    marginBottom,
    paddingRight,
    paddingLeft,
    marginRight,
    marginLeft,
    backgroundColor,
    color,
    fontSize,
    fontWeight,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
  } = useNode((node) => ({
    height: node.data?.props?.height as number,
    fontSize: node.data?.props?.fontSize as number,
    fontWeight: node.data?.props?.fontWeight as number,
    color: node.data.props?.color as string,
    backgroundColor: node.data?.props?.backgroundColor as string,
    padding: node.data.props?.padding as number,
    paddingTop: node.data.props?.paddingTop as number,
    paddingBottom: node.data.props?.paddingBottom as number,
    paddingRight: node.data.props?.paddingRight as number,
    paddingLeft: node.data.props?.paddingLeft as number,
    margin: node.data.props?.margin as number,
    marginTop: node.data.props?.marginTop as number,
    marginBottom: node.data.props?.marginBottom as number,
    marginRight: node.data.props?.marginRight as number,
    marginLeft: node.data.props?.marginLeft as number,
    display: node.data.props?.display as string,
    justifyContent: node.data.props?.justifyContent as string,
    alignItems: node.data.props?.alignItems as string,
    flexDirection: node.data.props?.flexDirection as string,
    flexWrap: node.data.props?.flexWrap as string,
  }));
  const handleChangeSpacing = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setProp((props: any) => (props[name] = value));
  };
  const handleChangeColorPicker = (
    newColor: string,
    name: "backgroundColor" | "color"
  ) => {
    setProp((props: any) => (props[name] = newColor));
  };

  const handleChangeLayout = (
    name: layoutProperties,
    value: FlexProperties | displayProperties
  ) => {
    setProp((props: any) => (props[name] = value));
  };

  return {
    setProp,
    handleChangeSpacing,
    handleChangeColorPicker,
    handleChangeLayout,
    height,
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    paddingRight,
    paddingLeft,
    marginRight,
    marginLeft,
    padding,
    margin,
    backgroundColor,
    color,
    fontSize,
    fontWeight,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
  };
};
