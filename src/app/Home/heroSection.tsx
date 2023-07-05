"use client";
import { Container, ContainerDefaultProps } from "@/user-components/container";
import { ContainerSettings } from "@/user-components/container/containerSettings";
import { Typography } from "@/user-components/typography";
import { Element } from "@craftjs/core";


export const HeroSection = () => {
  return (
    <>
      <Element is={Container} id="heroSec">
        <Typography tagName="h1"/>
      </Element>
    </>
  );
};

HeroSection.craft = {
  related: {
    settings: ContainerSettings,
    props: ContainerDefaultProps,
  },
};
