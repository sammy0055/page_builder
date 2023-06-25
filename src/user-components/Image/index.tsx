import { Element, useEditor, useNode } from "@craftjs/core";
import Image from "next/image";
import styles from "./image.module.css";
import { useEditorContext } from "@/app/context/editor-context";
import { commonStyles } from "@/utils/common-styles";
import { Resizable } from "../container/resizable";
import Dropdown from "@/app/editor/components/dropdown";
import { Dimention } from "@/app/editor/components/dimension";
import { Slider } from "@/app/editor/components/slider";
import { useCustomStyles } from "@/hooks/custom-styles";

export const ContainerDefaultProps = {
  width: 200,
  height: 10,
  backgroundColor: "auto",
  display: "auto",
  flexDirection: "auto",
  flexWrap: "nowrap",
};

export const ImageContainer = (props: any) => {
  const [{ isEditable }] = useEditorContext();
  const commoncss = commonStyles(props);

  const css: any = {
    ...commoncss,
    position: "relative",
    width: props?.width,
    maxWidth: "100%",
    height: `${props?.height}vh`,
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
    setProp((props: any) => (props.border = "1px solid black"));
  };

  const edit = isActive
    ? styles.Container
    : isEditable
    ? styles.ContainerMain
    : "";
  return (
    <div
      style={css}
      ref={(ref: any) => connect(drag(ref))}
      onFocus={handleChnages}
      className={edit}
    >
      {isActive && <Resizable setProp={setProp} />}
      {props.children}
    </div>
  );
};

export const ImageWrapper = () => {
  return (
    <Element is={ImageContainer} id="imagewrapper">
      <Image
        src={`/black_fashion.jpg`}
        alt="continer"
        width={100}
        height={100}
        className={styles.Image}
      />
    </Element>
  );
};

const ImageWrappersetting = () => {
  const {
    handleChangeSpacing,
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    paddingRight,
    paddingLeft,
    marginRight,
    marginLeft,
  } = useCustomStyles();

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
      <Dropdown label="spacing">
        <Dimention
          dimensionsValue={dimensionsValue}
          handleChange={handleChangeSpacing}
        />
        <Slider label="height" />
        <Slider label="margin" />
        <Slider label="padding" />
      </Dropdown>
      <Dropdown label="add image">
        <>dfzds</>
      </Dropdown>
    </>
  );
};

ImageContainer.craft = {
  props: ContainerDefaultProps,
  related: { settings: ImageWrappersetting },
};
