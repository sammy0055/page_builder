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

export const ContainerLayout = () => {
  const { handleChangeLayout, display } = useCustomStyles();
  return (
    <>
      <DisplayContainer>
        <Chip label="Display" />
        <IconBtnWrapper>
          <IconBtn
            isSelected={display === "block"}
            onClick={() => handleChangeLayout("display", "block")}
          >
            <RxBoxModel size={15} />
          </IconBtn>

          <IconBtn
            isSelected={display === "flex"}
            onClick={() => handleChangeLayout("display", "flex")}
          >
            <CgDisplayFlex size={15} />
          </IconBtn>

          <IconBtn
            isSelected={display === "grid"}
            onClick={() => handleChangeLayout("display", "grid")}
          >
            <FiGrid size={15} />
          </IconBtn>

          <IconBtn
            isSelected={display === "auto"}
            onClick={() => handleChangeLayout("display", "auto")}
          >
            <AiFillEyeInvisible size={15} />
          </IconBtn>
        </IconBtnWrapper>
      </DisplayContainer>

      <DisplayContainer>
        <Chip label="Direction" />
        <IconBtnWrapper>
          <BtnWrapper>Horizontal</BtnWrapper>
          <BtnWrapper>Vertical</BtnWrapper>
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
