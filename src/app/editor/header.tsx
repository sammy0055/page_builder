import styles from "./styles/nav.module.css";

import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from "copy-to-clipboard";

//icons TbComponents
import { TbComponents } from "react-icons/tb";
import { CgStyle } from "react-icons/cg";
import { AiOutlineEye, AiOutlineSave } from "react-icons/ai";
import { GrUndo, GrRedo } from "react-icons/gr";
import { IconWrapper } from "./styles/header";
import Tooltip from "./components/tooltip";
import { useEditorContext } from "../context/editor-context";

export default function Header() {
  const { query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [_, dispatch] = useEditorContext();

  const showComponentPanel = (value: boolean) => {
    dispatch({ type: "ISCOMPONENT", payload: value });
  };

  const saveNode = () => {
    const json = query.serialize();
    copy(lz.encodeBase64(lz.compress(json)));
    alert("state copied to clipboard");
  };

  return (
    <header className={styles.Nav}>
      <span>hello</span>
      <span>
        <select name="selector">
          <option>home</option>
          <option>preview</option>
        </select>
      </span>
      <nav className={styles.NavText}>
        <NavIcons
          IconComponent={AiOutlineEye}
          TooltipContent="user-components"
        />
        <NavIcons IconComponent={GrUndo} TooltipContent="user-components" />
        <NavIcons IconComponent={GrRedo} TooltipContent="user-components" />
        <NavIcons
          handler={saveNode}
          IconComponent={AiOutlineSave}
          TooltipContent="user-components"
        />
        <NavIcons
          handler={() => showComponentPanel(false)}
          IconComponent={CgStyle}
          TooltipContent="user-components"
        />
        <NavIcons
          handler={() => showComponentPanel(true)}
          IconComponent={TbComponents}
          TooltipContent="user-components"
        />
      </nav>
    </header>
  );
}

interface NavIconsProps {
  TooltipContent: string;
  IconComponent: any;
  handler?: () => void;
}
const NavIcons: React.FC<NavIconsProps> = ({
  TooltipContent,
  IconComponent,
  handler,
}) => {
  return (
    <div onClick={handler}>
      <Tooltip content={TooltipContent}>
        <IconWrapper>{<IconComponent size={20} />}</IconWrapper>
      </Tooltip>
    </div>
  );
};
