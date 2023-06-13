"use client";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import { Spacing } from "@/types";
import { commonStyles } from "@/utils/common-styles";
import { TypographySettings } from "./typography-settings";

export interface TypographyProps extends Partial<Spacing> {
  children: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  tagName: "p" | "h1" | "h2" | "h3";
}

export const Typography = (props: TypographyProps) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    hasSelectedNode,
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);
  const commoncss = commonStyles(props);
  const css = {
    color: `${props?.color}` || "auto",
    fontSize: `${props?.fontSize}px` || "auto",
    fontWeight: `${props?.fontWeight}` || "auto",
    ...commoncss,
  };

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);
  return (
    <span
      ref={(ref: any) => connect(drag(ref))}
      onClick={() => setEditable(true)}
      style={{ marginBottom: "22px" }}
    >
      <ContentEditable
        disabled={!editable}
        html={props.children}
        tagName={props.tagName}
        style={css}
        onChange={(e: ContentEditableEvent) =>
          setProp(
            (props: TypographyProps) =>
              (props.children = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
      />
    </span>
  );
};

Typography.craft = {
  props: {
    style: { fontSize: 16 },
  },
  related: {
    settings: TypographySettings,
  },
};
