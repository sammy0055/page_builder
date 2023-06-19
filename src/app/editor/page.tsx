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
import { LoadStateNodes } from "@/components/state-loader";
import { Home } from "../Home/home";
import { useState } from "react";

export default function editor() {
  const [Component, setComponent] = useState<JSX.Element>();

  const pages = {
    home: Home,
    preview: <p>preview</p>,
  };
  const handlePages = (page: "home" | "preview") => {
    setComponent(pages[page]);
  };
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
        <LoadStateNodes />
        <Header />
        <div className={styles.main}>
          <Frame>
            <section className={styles.main_page}>
              <Home />
            </section>
          </Frame>
          <SideBar />
        </div>
      </Editor>
    </>
  );
}
