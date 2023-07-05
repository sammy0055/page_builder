"use client";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { Spacing } from "@/types";
import { commonStyles } from "@/utils/common-styles";
import { TypographySettings } from "./typography-settings";
import React, { useEffect, useState } from "react";

export interface TypographyProps extends Partial<Spacing> {
  Text?: string;
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
    
    <ContentEditable
      innerRef={(ref: any) => connect(drag(ref))}
      disabled={!editable}
      html={props?.Text!}
      tagName={props.tagName}
      style={css}
      onClick={() => setEditable(true)}
      onChange={(e: ContentEditableEvent) =>
        setProp(
          (props: TypographyProps) =>
            (props.Text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
        )
      }
    />
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
