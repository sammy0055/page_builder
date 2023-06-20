"use client";

import { Header } from "./header";
import { Editor, Frame } from "@craftjs/core";
import { NewsBar } from "@/components/newsbar";
import { Typography } from "@/user-components/typography";
import { LoadStateNodes } from "@/components/state-loader";
import { Container } from "@/user-components/container";
import { HeroSection } from "./heroSection";
import { Home } from "./home";

export default function about() {
  return (
    <>
      <Editor
        resolver={{
          NewsBar,
          Typography,
          Container,
          HeroSection,
          Home,
        }}
      >
        {/* <LoadStateNodes /> */}
        <Frame>
          <div>
            <Home />
          </div>
        </Frame>
      </Editor>
    </>
  );
}
