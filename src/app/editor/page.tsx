"use client";
import SideBar from "./components/side-bar";
import styles from "./styles/main.module.css";
import { Editor as Editors, Frame, Element, useNode } from "@craftjs/core";
import Header from "./header";
import { Typography } from "@/user-components/typography";
import { Container } from "@/user-components/container";
import { LoadStateNodes } from "@/components/state-loader";
import { RenderNode } from "./components/render";
import { useEditorContext } from "../context/editor-context";
import { ImageWrapper } from "@/user-components/Image";
import Image from "next/image";
import styled from "styled-components";

const View = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  background-color: rgb(245, 245, 245);
  height: 93vh;
`;
export default function Editor() {
  return (
    <>
      <Editors
        resolver={{
          Typography,
          SideBar,
          Header,
          Container,
          ImageWrapper,
          Image,
          ParentContainer,
        }}
        // enabled={false}
        // onRender={RenderNode}
      >
        {/* <LoadStateNodes /> */}
        <Header />
        <View>
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
        </View>
      </Editors>
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

  //const _style = isEditable ? styles.main_parent : "";
  return (
    <div
      style={{ ...css }}
      ref={(ref: any) => connect(drag(ref))}
      className={styles.main_parent}
    >
      {children}
    </div>
  );
};
