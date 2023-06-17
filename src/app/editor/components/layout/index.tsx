import { useCustomStyles } from "@/hooks/custom-styles";
import { AiFillEyeInvisible } from "react-icons/ai";
import { CgDisplayFlex } from "react-icons/cg";
import { FiGrid } from "react-icons/fi";
import { RxBoxModel } from "react-icons/rx";
import { MdOutlineAlignVerticalTop } from "react-icons/md";
//MdOutlineAlignVerticalTop
//modules
import { Chip } from "../chip";
import { IconWrapper } from "../iconWrapper";
import styles from "./layoutdiv.module.css";
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
          <button className={styles.Direction}>Horizontal</button>
          <button className={styles.Direction}>Vertical</button>
        </div>
      </div>

      <div className={styles.DisplayContainer}>
        <Chip label="Align" />
        <div className={styles.IconBox}>
          <IconWrapper icon={<MdOutlineAlignVerticalTop size={17} />} />
          <IconWrapper icon={<CgDisplayFlex size={17} />} />
          <IconWrapper icon={<FiGrid size={17} />} />
          <IconWrapper icon={<AiFillEyeInvisible size={17} />} />
        </div>
      </div>
    </>
  );
};
