import { useEditor, useNode } from "@craftjs/core";
import Image from "next/image";
import styles from "./image.module.css";
import { useEditorContext } from "@/app/context/editor-context";
import { commonStyles } from "@/utils/common-styles";
import { Resizable } from "../container/resizable";
import { ImageWrappersetting } from "./image-settings";

export const ContainerDefaultProps = {
  width: 200,
  height: 10,
  backgroundColor: "auto",
  display: "auto",
  flexDirection: "auto",
  flexWrap: "nowrap",
  imageUrl: "/black_fashion.jpg",
};

export const ImageWrapper = (props: any) => {
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
      ref={(ref: any) => connect(drag(ref))}
      style={css}
      onFocus={handleChnages}
      className={edit}
    >
      {isActive && <Resizable setProp={setProp} />}
      {/* <Image
        ref={(ref: any) => connect(drag(ref))}
        src={props?.imageUrl}
        alt="continer"
        width={100}
        height={100}
        className={styles.Image}
      /> */}
    </div>
  );
};

ImageWrapper.craft = {
  props: ContainerDefaultProps,
  related: { settings: ImageWrappersetting },
};
