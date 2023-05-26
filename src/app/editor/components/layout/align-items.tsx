import { useCustomStyles } from "@/hooks/custom-styles";
import {
  FlexProperties,
  FlexPropertiesEnum,
  displayProperties,
  layoutProperties,
} from "@/types";
import { IconBtn } from "../iconWrapper/icon-btn";
import { DisplayContainer, IconBtnWrapper } from "./layoutdiv";
import { Chip } from "../chip";
import {
  MdOutlineAlignHorizontalRight,
  MdOutlineAlignVerticalBottom,
  MdOutlineAlignVerticalCenter,
  MdOutlineAlignVerticalTop,
} from "react-icons/md";

export const AlignItems = () => {
  const { handleChangeLayout, alignItems } = useCustomStyles();

  const handleChange = (
    name: layoutProperties,
    value: FlexProperties | displayProperties
  ) => handleChangeLayout(name, value);

  return (
    <DisplayContainer>
      <Chip label="Align" />
      <IconBtnWrapper>
        <IconBtn
          isSelected={alignItems === FlexPropertiesEnum.FlexStart}
          onClick={() =>
            handleChange("alignItems", FlexPropertiesEnum.FlexStart)
          }
        >
          <MdOutlineAlignVerticalTop size={15} />
        </IconBtn>
        <IconBtn
          isSelected={alignItems === FlexPropertiesEnum.Center}
          onClick={() => handleChange("alignItems", FlexPropertiesEnum.Center)}
        >
          <MdOutlineAlignVerticalCenter size={15} />
        </IconBtn>
        <IconBtn
          isSelected={alignItems === FlexPropertiesEnum.FlexEnd}
          onClick={() => handleChange("alignItems", FlexPropertiesEnum.FlexEnd)}
        >
          <MdOutlineAlignVerticalBottom size={15} />
        </IconBtn>
        <IconBtn
          isSelected={alignItems === FlexPropertiesEnum.Baseline}
          onClick={() =>
            handleChange("alignItems", FlexPropertiesEnum.Baseline)
          }
        >
          <MdOutlineAlignHorizontalRight size={15} />
        </IconBtn>
      </IconBtnWrapper>
    </DisplayContainer>
  );
};
