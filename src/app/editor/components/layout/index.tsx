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

//modules
import { Chip } from "../chip";
import { IconWrapper } from "../iconWrapper";
import { BtnWrapper, DisplayContainer, IconBtnWrapper } from "./layoutdiv";

export const ContainerLayout = () => {
  const {} = useCustomStyles();
  return (
    <>
      <DisplayContainer>
        <Chip label="Display" />
        <IconBtnWrapper>
          <IconWrapper icon={<RxBoxModel size={17} />} />
          <IconWrapper icon={<CgDisplayFlex size={17} />} />
          <IconWrapper icon={<FiGrid size={17} />} />
          <IconWrapper icon={<AiFillEyeInvisible size={17} />} />
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
          <IconWrapper icon={<MdOutlineAlignHorizontalLeft size={15} />} />
          <IconWrapper icon={<MdOutlineAlignVerticalCenter size={15} />} />
          <IconWrapper icon={<MdOutlineAlignVerticalBottom size={15} />} />
          <IconWrapper icon={<MdOutlineAlignHorizontalRight size={15} />} />
        </IconBtnWrapper>
      </DisplayContainer>
    </>
  );
};
