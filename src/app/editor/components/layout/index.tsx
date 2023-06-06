import { useCustomStyles } from "@/hooks/custom-styles";
import { AiFillEyeInvisible } from "react-icons/ai";
import { CgDisplayFlex } from "react-icons/cg";
import { FiGrid } from "react-icons/fi";
import { RxBoxModel } from "react-icons/rx";
import {
  MdOutlineAlignVerticalTop,
  MdOutlineAlignVerticalBottom,
  MdOutlineAlignHorizontalLeft,
  MdOutlineAlignHorizontalRight,
  MdOutlineAlignVerticalCenter,
} from "react-icons/md";
//MdOutlineAlignVerticalTop
//modules
import { Chip } from "../chip";
import { IconWrapper } from "../iconWrapper";
import styles from "./layoutdiv.module.css";
import { BtnWrapper } from "./layoutdiv";
export const ContainerLayout = () => {
  const {} = useCustomStyles();
  return (
    <>
      <div className={styles.DisplayContainer}>
        <Chip label="Display" />
        <div className={styles.IconBox}>
          <IconWrapper icon={<RxBoxModel size={17} />} />
          <IconWrapper icon={<CgDisplayFlex size={17} />} />
          <IconWrapper icon={<FiGrid size={17} />} />
          <IconWrapper icon={<AiFillEyeInvisible size={17} />} />
        </div>
      </div>

      <div className={styles.DisplayContainer}>
        <Chip label="Direction" />
        <div style={{ display: "flex" }}>
          <BtnWrapper>Horizontal</BtnWrapper>
        </div>
      </div>

      <div className={styles.DisplayContainer}>
        <Chip label="Align" />
        <div className={styles.IconBox}>
          <IconWrapper icon={<MdOutlineAlignHorizontalLeft size={17} />} />
          <IconWrapper icon={<MdOutlineAlignVerticalCenter size={17} />} />
          <IconWrapper icon={<MdOutlineAlignVerticalBottom size={17} />} />
          <IconWrapper icon={<MdOutlineAlignHorizontalRight size={17} />} />
        </div>
      </div>
    </>
  );
};
