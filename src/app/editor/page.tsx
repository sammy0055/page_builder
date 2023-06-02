"use client";
import SideBar from "./components/side-bar";
import styles from "./styles/main.module.css";
import { Editor, Frame } from "@craftjs/core";
import Header from "./header";
import { NewsBar } from "@/components/newsbar";
import { Typography } from "@/user-components/typography";
import { Container } from "@/user-components/container";
import { HeroSection } from "../Home/heroSection";
import { LoadStateNodes } from "@/components/state-loader";
import { Home } from "../Home/home";
import { RenderNode } from "./components/render";
import { Wrapper } from "./components/render/wrapper";

export default function editor() {
  return (
    <>
      <Editor
        resolver={{
          NewsBar,
          Typography,
          SideBar,
          Header,
          Container,
          HeroSection,
          Home,
        }}
      >
        {/* <LoadStateNodes /> */}
        <Header />
        <div className={styles.main}>
          <Frame>
            <section className={styles.main_page}>
              <Container>
                <p>welcome</p>
                <p>welcome</p>
              </Container>
            </section>
          </Frame>
          <SideBar />
        </div>
      </Editor>
    </>
  );
}
