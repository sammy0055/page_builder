"use client";

import { Header } from "./header";
import { Editor, Frame } from "@craftjs/core";
import { NewsBar } from "@/components/newsbar";
import { Typography } from "@/user-components/typography";
import { LoadStateNodes } from "@/components/state-loader";
// import { Container } from "@/user-components/container";
// import { HeroSection } from "./heroSection";

export default function about() {
  return (
    <>
      <Editor
        resolver={{
          NewsBar,
          Typography,
        }}
        
      >
        <LoadStateNodes />
        <Frame>
          <div>
            <NewsBar />
          </div>
        </Frame>
      </Editor>
    </>
  );
}
