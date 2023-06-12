import React, { useState } from "react";
import styles from "./dropdown.module.css";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

interface DropdownProps {
  label:string
  children:any
}
export const Dropdown: React.FC<DropdownProps> = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.DropdownContainer}>
      <div
        className={styles.DropdownTogglerContainer}
        onClick={() => children && setIsOpen(!isOpen)}
      >
        <button className={styles.DropdownToggler}>{label}</button>
        {isOpen ? <BiCaretDown /> : <BiCaretUp />}
      </div>
      <div className={styles.SettingsContainer}>{isOpen && children}</div>
    </div>
  );
};

export default Dropdown;
