"use client";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useNode, useEditor } from "@craftjs/core";
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

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const [editable, setEditable] = useState(enabled);

  const commoncss = commonStyles(props);
  const css = {
    color: `${props?.color}` || "auto",
    fontSize: `${props?.fontSize}px` || "auto",
    fontWeight: `${props?.fontWeight}` || "auto",
    ...commoncss,
  };

  useEffect(() => {
    !hasSelectedNode && setEditable(true);
  }, [hasSelectedNode]);

  const handler = () => {
    if (enabled) setEditable(false);
    else setEditable(true);
  };

  return (
    <ContentEditable
      innerRef={(ref: any) => connect(drag(ref))}
      disabled={editable}
      html={props?.Text!}
      tagName={props.tagName}
      style={css}
      onClick={handler}
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
    fontSize: 16,
    fontWeight: 400,
    tagName: "p",
  },
  related: {
    settings: TypographySettings,
  },
};
