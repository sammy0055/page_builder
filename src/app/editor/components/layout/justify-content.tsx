import { useCustomStyles } from "@/hooks/custom-styles";
import {
  FlexProperties,
  FlexPropertiesEnum,
  displayProperties,
  layoutProperties,
} from "@/types";
import {
  LuAlignHorizontalJustifyCenter,
  LuAlignHorizontalJustifyEnd,
  LuAlignHorizontalJustifyStart,
  LuAlignVerticalJustifyCenter,
} from "react-icons/lu";
import { IconBtn } from "../iconWrapper/icon-btn";
import { DisplayContainer, IconBtnWrapper } from "./layoutdiv";
import { Chip } from "../chip";

export const JustifyContent = () => {
  const { handleChangeLayout, justifyContent } = useCustomStyles();

  const handleChange = (
    name: layoutProperties,
    value: FlexProperties | displayProperties
  ) => handleChangeLayout(name, value);

  return (
    <DisplayContainer>
      <Chip label="Justify" />
      <IconBtnWrapper>
        <IconBtn
          isSelected={justifyContent === FlexPropertiesEnum.FlexStart}
          onClick={() =>
            handleChange("justifyContent", FlexPropertiesEnum.FlexStart)
          }
        >
          <LuAlignHorizontalJustifyStart size={15} />
        </IconBtn>
        <IconBtn
          isSelected={justifyContent === FlexPropertiesEnum.FlexEnd}
          onClick={() =>
            handleChange("justifyContent", FlexPropertiesEnum.FlexEnd)
          }
        >
          <LuAlignHorizontalJustifyEnd size={15} />
        </IconBtn>
        <IconBtn
          isSelected={justifyContent === FlexPropertiesEnum.Center}
          onClick={() =>
            handleChange("justifyContent", FlexPropertiesEnum.Center)
          }
        >
          <LuAlignVerticalJustifyCenter size={15} />
        </IconBtn>
        <IconBtn
          isSelected={justifyContent === FlexPropertiesEnum.SpaceAround}
          onClick={() =>
            handleChange("justifyContent", FlexPropertiesEnum.SpaceAround)
          }
        >
          <LuAlignHorizontalJustifyCenter size={15} />
        </IconBtn>
      </IconBtnWrapper>
    </DisplayContainer>
  );
};
