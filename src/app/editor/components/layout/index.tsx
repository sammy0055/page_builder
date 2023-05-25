import { useCustomStyles } from "@/hooks/custom-styles";
import { Chip } from "../chip";
import { BtnWrapper, DisplayContainer, IconBtnWrapper } from "./layoutdiv";
import {
  FlexProperties,
  FlexPropertiesEnum,
  displayProperties,
  displayValues,
  layoutProperties,
} from "@/types";
import Tooltip from "../tooltip";
import { JustifyContent } from "./justify-content";
import { AlignItems } from "./align-items";
import { DisplayBox } from "./display";

export const ContainerLayout = () => {
  const { handleChangeLayout, flexDirection, flexWrap } = useCustomStyles();

  const handleChange = (
    name: layoutProperties,
    value: FlexProperties | displayProperties
  ) => handleChangeLayout(name, value);

  return (
    <>
      <DisplayBox />
      <DisplayContainer>
        <Chip label="Direction" />
        <IconBtnWrapper>
          <BtnWrapper
            isSelected={flexDirection === displayValues.column}
            onClick={() => handleChange("flexDirection", displayValues.column)}
          >
            Horizontal
          </BtnWrapper>
          <BtnWrapper
            isSelected={flexDirection === displayValues.row}
            onClick={() => handleChange("flexDirection", displayValues.row)}
          >
            Vertical
          </BtnWrapper>
        </IconBtnWrapper>
      </DisplayContainer>

      <AlignItems />
      <JustifyContent />
      
      <DisplayContainer>
        <Chip label="Wrap" />
        <IconBtnWrapper>
          <Tooltip content={"well come on board"}>
            <BtnWrapper
              isSelected={flexWrap === FlexPropertiesEnum.Nowrap}
              onClick={() =>
                handleChange("flexWrap", FlexPropertiesEnum.Nowrap)
              }
            >
              Don't wrap
            </BtnWrapper>
          </Tooltip>
          <Tooltip content={"well come on board"}>
            <BtnWrapper
              isSelected={flexWrap === FlexPropertiesEnum.Wrap}
              onClick={() => handleChange("flexWrap", FlexPropertiesEnum.Wrap)}
            >
              Wrap
            </BtnWrapper>
          </Tooltip>
        </IconBtnWrapper>
      </DisplayContainer>
    </>
  );
};
