"use client";
import SideBar from "./components/side-bar";
import styles from "./styles/main.module.css";
import { Editor, Frame, Element, useNode } from "@craftjs/core";
import Header from "./header";
import { NewsBar } from "@/components/newsbar";
import { Typography } from "@/user-components/typography";
import { Container } from "@/user-components/container";
import { HeroSection } from "../Home/heroSection";
import { LoadStateNodes } from "@/components/state-loader";
import { Home } from "../Home/home";
import { RenderNode } from "./components/render";
import { Wrapper } from "./components/render/wrapper";
import { Container2 } from "@/user-components/container/constainer-two";
import MyDiv from "@/user-components/container/resizer1";
import { useEditorContext } from "../context/editor-context";
import { ImageWrapper } from "@/user-components/Image";
import Image from "next/image";
export default function editor() {
  const [{ isEditable }] = useEditorContext();
  return (
    <>
      <Editor
        resolver={{
          Typography,
          SideBar,
          Header,
          Container,
          ImageWrapper,
          Image,
          ParentContainer,
        }}
        enabled={isEditable}
        // onRender={RenderNode}
      >
        {/* <LoadStateNodes /> */}
        <Header />
        <div className={styles.main}>
          <Frame>
            <section className={`${styles.main_page} page-container`}>
              <Element
                is={ParentContainer}
                id="ParentContainers"
                canvas
              ></Element>
            </section>
          </Frame>
          <SideBar />
        </div>
      </Editor>
    </>
  );
}

const ParentContainer = ({ children }: any) => {
  const css = {
    minHeight: "100vh",
    width: "100%",
  };
  const {
    connectors: { connect, drag },
  } = useNode();
  const [{ isEditable }] = useEditorContext();

  const _style = isEditable ? styles.main_parent : "";
  return (
    <div
      style={{ ...css }}
      ref={(ref: any) => connect(drag(ref))}
      className={_style}
    >
      {children}
    </div>
  );
};
