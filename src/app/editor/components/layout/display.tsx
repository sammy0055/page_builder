import { useCustomStyles } from "@/hooks/custom-styles";
import {
  FlexProperties,
  displayProperties,
  displayValues,
  layoutProperties,
} from "@/types";
import { IconBtn } from "../iconWrapper/icon-btn";
import { DisplayContainer, IconBtnWrapper } from "./layoutdiv";
import { Chip } from "../chip";
import { CgDisplayFlex } from "react-icons/cg";
import { FiGrid } from "react-icons/fi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { RxBoxModel } from "react-icons/rx";

export const DisplayBox = () => {
  const { handleChangeLayout, display } = useCustomStyles();

  const handleChange = (
    name: layoutProperties,
    value: FlexProperties | displayProperties
  ) => handleChangeLayout(name, value);

  return (
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
  );
};
