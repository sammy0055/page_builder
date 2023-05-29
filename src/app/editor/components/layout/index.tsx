import { useCustomStyles } from "@/hooks/custom-styles";
import { AiFillEyeInvisible } from "react-icons/ai";
import { CgDisplayFlex } from "react-icons/cg";
import { FiGrid } from "react-icons/fi";
import { RxBoxModel } from "react-icons/rx";
import {
  MdOutlineAlignVerticalBottom,
  MdOutlineAlignHorizontalLeft,
  MdOutlineAlignHorizontalRight,
  MdOutlineAlignVerticalCenter,
} from "react-icons/md";
import {
  LuAlignVerticalJustifyStart,
  LuAlignVerticalJustifyEnd,
  LuAlignVerticalJustifyCenter,
  LuAlignHorizontalJustifyCenter,
} from "react-icons/lu";

//modules
import { Chip } from "../chip";
import { BtnWrapper, DisplayContainer, IconBtnWrapper } from "./layoutdiv";
import { IconBtn } from "../iconWrapper/icon-btn";
import { displayValues } from "@/types";

export const ContainerLayout = () => {
  const { handleChangeLayout, display, flexDirection } = useCustomStyles();
  return (
    <>
      <DisplayContainer>
        <Chip label="Display" />
        <IconBtnWrapper>
          <IconBtn
            isSelected={display === displayValues.block}
            onClick={() => handleChangeLayout("display", displayValues.block)}
          >
            <RxBoxModel size={15} />
          </IconBtn>

          <IconBtn
            isSelected={display === displayValues.flex}
            onClick={() => handleChangeLayout("display", displayValues.flex)}
          >
            <CgDisplayFlex size={15} />
          </IconBtn>

          <IconBtn
            isSelected={display === displayValues.grid}
            onClick={() => handleChangeLayout("display", displayValues.grid)}
          >
            <FiGrid size={15} />
          </IconBtn>

          <IconBtn
            isSelected={display === displayValues.auto}
            onClick={() => handleChangeLayout("display", displayValues.auto)}
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
            onClick={() =>
              handleChangeLayout("flexDirection", displayValues.column)
            }
          >
            Horizontal
          </BtnWrapper>
          <BtnWrapper
            isSelected={flexDirection === displayValues.row}
            onClick={() =>
              handleChangeLayout("flexDirection", displayValues.row)
            }
          >
            Vertical
          </BtnWrapper>
        </IconBtnWrapper>
      </DisplayContainer>

      <DisplayContainer>
        <Chip label="Align" />
        <IconBtnWrapper>
          <IconBtn>
            <MdOutlineAlignHorizontalLeft size={15} />
          </IconBtn>
          <IconBtn>
            <MdOutlineAlignVerticalCenter size={15} />
          </IconBtn>
          <IconBtn>
            <MdOutlineAlignVerticalBottom size={15} />
          </IconBtn>
          <IconBtn>
            <MdOutlineAlignHorizontalRight size={15} />
          </IconBtn>
        </IconBtnWrapper>
      </DisplayContainer>

      <DisplayContainer>
        <Chip label="Justify" />
        <IconBtnWrapper>
          <IconBtn>
            <LuAlignVerticalJustifyStart size={15} />
          </IconBtn>
          <IconBtn>
            <LuAlignVerticalJustifyEnd size={15} />
          </IconBtn>
          <IconBtn>
            <LuAlignVerticalJustifyCenter size={15} />
          </IconBtn>
          <IconBtn>
            <LuAlignHorizontalJustifyCenter size={15} />
          </IconBtn>
        </IconBtnWrapper>
      </DisplayContainer>

      <DisplayContainer>
        <Chip label="Wrap" />
        <IconBtnWrapper>
          <BtnWrapper>Don't wrap</BtnWrapper>
          <BtnWrapper>Wrap</BtnWrapper>
        </IconBtnWrapper>
      </DisplayContainer>
    </>
  );
};
