import { Styles } from "@/types";
import { useNode, useEditor } from "@craftjs/core";
import { Resizable } from "./resizable";
import { ContainerSettings } from "./containerSettings";
import { commonStyles } from "@/utils/common-styles";
import { ReactNode } from "react";
import styles from "./container.module.css";
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
  const commoncss = commonStyles(props);
  const css: any = {
    ...commoncss,
    // border: editable ? "1px solid black" : "none",
    position: "relative",
    width: `${props?.width}px`,
    maxWidth: "100%",
    height: `${props?.height}vh`,
    maxHeight: `${100}vh`,
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
  const { isActive, enabled } = useEditor((state, query) => ({
    isActive: query.getEvent("selected").contains(id),
    enabled: state.options.enabled,
  }));

  const handleChnages = () => {
    setProp((props: ContainerProps) => (props.border = "1px solid black"));
  };

  const edit = isActive
    ? styles.Container
    : enabled
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
