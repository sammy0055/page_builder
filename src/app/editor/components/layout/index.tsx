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
import { IconWrapper } from "../iconWrapper";
import { BtnWrapper, DisplayContainer, IconBtnWrapper } from "./layoutdiv";

export const ContainerLayout = () => {
  const { handleChangeLayout } = useCustomStyles();
  return (
    <>
      <DisplayContainer>
        <Chip label="Display" />
        <IconBtnWrapper>
          <IconWrapper
            icon={<RxBoxModel size={15} />}
            handleChange={() => handleChangeLayout("display", "block")}
          />
          <IconWrapper
            icon={<CgDisplayFlex size={15} />}
            handleChange={() => handleChangeLayout("display", "flex")}
          />
          <IconWrapper
            icon={<FiGrid size={15} />}
            handleChange={() => handleChangeLayout("display", "grid")}
          />
          <IconWrapper
            icon={<AiFillEyeInvisible size={15} />}
            handleChange={() => handleChangeLayout("display", "auto")}
          />
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
          <IconWrapper icon={<MdOutlineAlignHorizontalLeft size={15} />} />
          <IconWrapper icon={<MdOutlineAlignVerticalCenter size={15} />} />
          <IconWrapper icon={<MdOutlineAlignVerticalBottom size={15} />} />
          <IconWrapper icon={<MdOutlineAlignHorizontalRight size={15} />} />
        </IconBtnWrapper>
      </DisplayContainer>

      <DisplayContainer>
        <Chip label="Justify" />
        <IconBtnWrapper>
          <IconWrapper icon={<LuAlignVerticalJustifyStart size={15} />} />
          <IconWrapper icon={<LuAlignVerticalJustifyEnd size={15} />} />
          <IconWrapper icon={<LuAlignVerticalJustifyCenter size={15} />} />
          <IconWrapper icon={<LuAlignHorizontalJustifyCenter size={15} />} />
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
