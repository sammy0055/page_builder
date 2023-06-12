"use client";

import Header from "./header";
import { Editor, Frame } from "@craftjs/core";
import { NewsBar } from "@/components/newsbar";
import { Typography } from "@/user-components/typography";
import { Container } from "@/user-components/container";
import { ResizableCom } from "@/user-components/container/resizable";
export default function about() {
  return (
    <>
      <Editor resolver={{ Header, NewsBar, Typography }}>
        <Frame>
          <div>
            <Header />
            {/* <ResizableCom /> */}
          </div>
        </Frame>
      </Editor>
    </>
  );
}
