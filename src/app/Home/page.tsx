"use client";

import  Header  from "../editor/header";
import { Editor, Frame } from "@craftjs/core";
import { NewsBar } from "@/components/newsbar";
import { Typography } from "@/user-components/typography";
import { LoadStateNodes } from "@/components/state-loader";
import { Container } from "@/user-components/container";
import { HeroSection } from "./heroSection";
import { Home } from "./home";
import SideBar from "../editor/components/side-bar";
import { ImageWrapper } from "@/user-components/Image";
import Image from "next/image";
import { ParentContainer } from "../editor/page";

export default function about() {
  return (
    <>
      <Editor
        resolver={{
          Typography,
          SideBar,
          Header,
          Container,
          ImageWrapper,
          ParentContainer
        }}
        enabled={false}
      >
        <LoadStateNodes />
        <Frame>
        </Frame>
      </Editor>
    </>
  );
}
