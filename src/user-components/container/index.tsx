import { Styles } from "@/types";
import { useNode, useEditor } from "@craftjs/core";
import { Resizable } from "./resizable";
import { ContainerSettings } from "./containerSettings";
import { commonStyles } from "@/utils/common-styles";
import { ReactNode } from "react";
import styles from "./container.module.css";
import { useEditorContext } from "@/app/context/editor-context";
export interface ContainerProps extends Styles {
  children?: ReactNode;
  border?: string;
}

export const ContainerDefaultProps = {
  width: 200,
  height: 10,
  backgroundColor: "auto",
  display: "auto",
  flexDirection: "auto",
  justifyContent: "auto",
  alignItems: "auto",
  flexWrap: "nowrap",
};

export const Container = (props: ContainerProps) => {
  const [{ isEditable }] = useEditorContext();
  const commoncss = commonStyles(props);
  const css: any = {
    ...commoncss,
    // border: editable ? "1px solid black" : "none",
    position: "relative",
    width: props?.width,
    maxWidth: "100%",
    height: `${props?.height}vh`,
    backgroundColor: props?.backgroundColor,
    display: props?.display,
    justifyContent: props?.justifyContent,
    alignItems: props?.alignItems,
    flexDirection: props?.flexDirection,
    flexWrap: props?.flexWrap,
  };

  const {
    id,
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  const { isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const handleChnages = () => {
    setProp((props: ContainerProps) => (props.border = "1px solid black"));
  };

  const edit = isActive
    ? styles.Container
    : isEditable
    ? styles.ContainerMain
    : "";
  return (
    <>
      <div
        style={css}
        ref={(ref: any) => connect(drag(ref))}
        onFocus={handleChnages}
        className={edit}
      >
        {isActive && <Resizable setProp={setProp} />}
        {props.children}
      </div>
    </>
  );
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
