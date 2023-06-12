"use client";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";

import { Selector } from "@/app/editor/components/selector";
import { ColorPicker } from "@/app/editor/components/colorPicker";
import Dropdown from "@/app/editor/components/dropdown";
import { Spacing } from "@/types";
import { Dimention } from "@/app/editor/components/dimension";
import { Slider } from "@/app/editor/components/slider";
import { commonStyles } from "@/utils/common-styles";

export type TypographyProps = {
  children: string;
  style?: Partial<Spacing> & {
    fontSize?: number;
    fontWeight?: number;
    color?: string;
  };
  tagName: "p" | "h1" | "h2" | "h3";
};

export const Typography = ({ children, tagName, style }: TypographyProps) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    hasSelectedNode,
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);
  const commoncss = commonStyles(style);
  const css = {
    color: `${style?.color}` || "auto",
    fontSize: `${style?.fontSize}px` || "auto",
    fontWeight: `${style?.fontWeight}` || "auto",
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
        html={children}
        tagName={tagName}
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

const TypographySettings = () => {
  const {
    actions: { setProp },
    fontSize,
    fontWeight,
    color,
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    paddingRight,
    paddingLeft,
    marginRight,
    marginLeft,
  } = useNode((node) => ({
    fontSize: node.data.props.style.fontSize,
    fontWeight: node.data.props.style.fontWeight,
    color: node.data.props.style.color,
    paddingTop: node.data.props.style.paddingTop,
    paddingBottom: node.data.props.style.paddingBottom,
    paddingRight: node.data.props.style.paddingRight,
    paddingLeft: node.data.props.style.paddingLeft,
    marginTop: node.data.props.style.marginTop,
    marginBottom: node.data.props.style.marginBottom,
    marginRight: node.data.props.style.marginRight,
    marginLeft: node.data.props.style.marginLeft,
  }));

  const fontSizesArray: number[] = [12, 14, 16, 18, 20, 24, 28, 32, 36, 40];
  const fontWeights: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProp(
      ({ style }: TypographyProps) =>
        (style!.fontSize = parseInt(e.target.value))
    );
  };

  const handleChangeFontWeight = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProp(
      ({ style }: TypographyProps) =>
        (style!.fontWeight = parseInt(e.target.value))
    );
  };

  const handleChangeColorPicker = (newColor: string) => {
    setProp(({ style }: TypographyProps) => (style!.color = newColor));
  };

  const handleChangeSpacing = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProp(({ style }: any) => (style[name] = value));
  };

  const dimensionsValue: any = {
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    paddingRight,
    paddingLeft,
    marginRight,
    marginLeft,
  };
  return (
    <>
      <Dropdown label="Typography">
        <Selector
          fontSize={fontSize}
          handleChange={handleChange}
          label="size"
          selectOptionData={fontSizesArray}
        />
        <Selector
          fontWeight={fontWeight}
          handleChange={handleChangeFontWeight}
          label="weight"
          selectOptionData={fontWeights}
        />
        <ColorPicker color={color} handleChange={handleChangeColorPicker} />
      </Dropdown>
      <Dropdown label="spacing">
        <Dimention
          dimensionsValue={dimensionsValue}
          handleChange={handleChangeSpacing}
        />
        <Slider label="margin" />
        <Slider label="padding" />
      </Dropdown>
    </>
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
