"use client";
import SideBar from "./components/side-bar";
import styles from "./styles/main.module.css";

import { Editor, Frame } from "@craftjs/core";
import Header from "./header";
// import {Header as NewsBar} from "../Home/header";
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
        enabled={true}
      >
        <Header />
        <div className={styles.main}>
          <Frame>
            <section className={styles.main_page}>
              <NewsBar />
              {/* <HeroSection /> */}
            </section>
          </Frame>
          <SideBar />
        </div>
      </Editor>
    </>
  );
}
