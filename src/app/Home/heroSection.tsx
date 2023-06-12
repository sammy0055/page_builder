"use client";
import { Container, ContainerDefaultProps } from "@/user-components/container";
import { ContainerSettings } from "@/user-components/container/containerSettings";
import { Typography } from "@/user-components/typography";
import { Element } from "@craftjs/core";
import { v4 as uuidv4 } from "uuid";

export const HeroSection = () => {
  return (
    <Element is={Container} id={uuidv4()} canvas>
      <Typography tagName="h1">hello </Typography>
    </Element>
  );
};

HeroSection.craft = {
  related: {
    settings: ContainerSettings,
    props: ContainerDefaultProps,
  },
};
