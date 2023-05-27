import { useCustomStyles } from "@/hooks/custom-styles";
import { AiFillEyeInvisible } from "react-icons/ai";
import { CgDisplayFlex } from "react-icons/cg";
import { FiGrid } from "react-icons/fi";
import { RxBoxModel } from "react-icons/rx";
import {
  MdOutlineAlignVerticalBottom,
  MdOutlineAlignVerticalTop,
  MdOutlineAlignHorizontalRight,
  MdOutlineAlignVerticalCenter,
} from "react-icons/md";
import {
  LuAlignHorizontalJustifyStart,
  LuAlignHorizontalJustifyEnd,
  LuAlignVerticalJustifyCenter,
  LuAlignHorizontalJustifyCenter,
} from "react-icons/lu";

//modules
import { Chip } from "../chip";
import { BtnWrapper, DisplayContainer, IconBtnWrapper } from "./layoutdiv";
import { IconBtn } from "../iconWrapper/icon-btn";
import {
  FlexProperties,
  FlexPropertiesEnum,
  displayProperties,
  displayValues,
  layoutProperties,
} from "@/types";
import Tooltip from "../tooltip";

export const ContainerLayout = () => {
  const {
    handleChangeLayout,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
  } = useCustomStyles();

  const handleChange = (
    name: layoutProperties,
    value: FlexProperties | displayProperties
  ) => handleChangeLayout(name, value);

  return (
    <>
      <DisplayContainer>
        <Chip label="Display" />
        <IconBtnWrapper>
          <IconBtn
            isSelected={display === displayValues.block}
            onClick={() => handleChange("display", displayValues.block)}
          >
            <RxBoxModel size={15} />
          </IconBtn>

          <IconBtn
            isSelected={display === displayValues.flex}
            onClick={() => handleChange("display", displayValues.flex)}
          >
            <CgDisplayFlex size={15} />
          </IconBtn>

          <IconBtn
            isSelected={display === displayValues.grid}
            onClick={() => handleChange("display", displayValues.grid)}
          >
            <FiGrid size={15} />
          </IconBtn>

          <IconBtn
            isSelected={display === displayValues.auto}
            onClick={() => handleChange("display", displayValues.auto)}
          >
            <AiFillEyeInvisible size={15} />
          </IconBtn>
        </IconBtnWrapper>
      </DisplayContainer>

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
            onClick={() =>
              handleChange("alignItems", FlexPropertiesEnum.Center)
            }
          >
            <MdOutlineAlignVerticalCenter size={15} />
          </IconBtn>
          <IconBtn
            isSelected={alignItems === FlexPropertiesEnum.FlexEnd}
            onClick={() =>
              handleChange("alignItems", FlexPropertiesEnum.FlexEnd)
            }
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

      <DisplayContainer>
        <Chip label="Wrap" />
        <IconBtnWrapper>
          <BtnWrapper
            isSelected={flexWrap === FlexPropertiesEnum.Nowrap}
            onClick={() => handleChange("flexWrap", FlexPropertiesEnum.Nowrap)}
          >
            Don't wrap
          </BtnWrapper>
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
