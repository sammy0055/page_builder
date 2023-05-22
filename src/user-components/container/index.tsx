import { Styles } from "@/types";
import { useNode } from "@craftjs/core";
import { Resizable } from "./resizable";
import { ContainerSettings } from "./containerSettings";
import { commonStyles } from "@/utils/common-styles";
import { ReactNode } from "react";
export interface ContainerProps extends Styles {
  children?: ReactNode;
}

export const ContainerDefaultProps = {
  width: 200,
  backgroundColor: "auto",
  display: "auto",
  flexDirection: "auto",
  flexWrap:"nowrap"
};

export const Container = (props: ContainerProps) => {
  const editable = true;
  const commoncss = commonStyles(props);
  const css: any = {
    ...commoncss,
    minHeight: "10vh",
    maxWidth: "99.5%",
    border: editable ? "1px solid black" : "none",
    position: "relative",
    width: props?.width || 100,
    height: props?.height ? `${props?.height}vh` : "none",
    backgroundColor: props?.backgroundColor
      ? `${props?.backgroundColor}`
      : "auto",
    display: props?.display || "auto",
    justifyContent: props?.justifyContent || "auto",
    alignItems: props?.alignItems || "auto",
    flexDirection: props?.flexDirection || "auto",
    flexWrap: props?.flexWrap || "nowrap",
  };

  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  return (
    <>
      <div style={css} ref={(ref: any) => connect(drag(ref))}>
        {editable && <Resizable setProp={setProp} />}
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
