"use client";
import SideBar from "./components/side-bar";
import styles from "./styles/main.module.css";

import { Editor, Element, Frame } from "@craftjs/core";
import Header from "../Home/header";
import { NewsBar } from "@/components/newsbar";
import { Typography } from "@/user-components/typography";
import { Container } from "@/user-components/container";
import { HeroSection } from "../Home/heroSection";

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
        }}
      >
        <Frame>
          <section className={styles.main_page}>
            <Header />
            <Container>
              <p>welcome</p>
            </Container>
              <HeroSection />
          </section>
        </Frame>
        <SideBar />
      </Editor>
    </>
  );
}
