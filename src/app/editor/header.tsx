import styles from "./styles/nav.module.css";

import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from "copy-to-clipboard";

//icons TbComponents
import { TbComponents } from "react-icons/tb";
import { CgStyle } from "react-icons/cg";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineSave,
} from "react-icons/ai";
import { GrUndo, GrRedo } from "react-icons/gr";
import { IconWrapper } from "./styles/header";
import Tooltip from "./components/tooltip";
import { useEditorContext } from "../context/editor-context";

export default function Header() {
  const { query, actions, enabled, canUndo, canRedo } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  const [{ isEditable }, dispatch] = useEditorContext();

  const showComponentPanel = (value: boolean) => {
    dispatch({ type: "ISCOMPONENT", payload: value });
  };

  const finishediting = () => {
    dispatch({ type: "ISEDITABLE", payload: !isEditable });
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
          handler={() =>
            actions.setOptions((options) => (options.enabled = !enabled))
          }
          IconComponent={enabled ? AiOutlineEye : AiOutlineEyeInvisible}
          TooltipContent="fullscreen"
        />
        <NavIcons
          IconComponent={GrUndo}
          TooltipContent="Undo"
          disabled={!canUndo}
          handler={() => actions.history.undo()}
        />
        <NavIcons
          IconComponent={GrRedo}
          TooltipContent="Redo"
          disabled={!canRedo}
          handler={() => actions.history.redo()}
        />
        <NavIcons
          handler={saveNode}
          IconComponent={AiOutlineSave}
          TooltipContent="save"
        />
        <NavIcons
          handler={() => showComponentPanel(false)}
          IconComponent={CgStyle}
          TooltipContent="styles"
        />
        <NavIcons
          handler={() => showComponentPanel(true)}
          IconComponent={TbComponents}
          TooltipContent="components"
        />
      </nav>
    </header>
  );
}

interface NavIconsProps {
  TooltipContent: string;
  disabled?: boolean;
  IconComponent: any;
  handler?: () => void;
}
const NavIcons: React.FC<NavIconsProps> = ({
  TooltipContent,
  IconComponent,
  disabled,
  handler,
}) => {
  return (
    <div onClick={handler}>
      <Tooltip content={TooltipContent} placement="bottom">
        <IconWrapper disabled={disabled}>
          {<IconComponent size={20} color={disabled ? "gray" : ""} />}
        </IconWrapper>
      </Tooltip>
    </div>
  );
};
