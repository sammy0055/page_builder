import Dropdown from "../../dropdown";
import { BoxWrapper } from "../styles/wrapper";
import { DragableComponent } from "../wrapper";
import { Container } from "@/user-components/container";
import { Typography } from "@/user-components/typography";

import { Element } from "@craftjs/core";
//icons
import { TbContainer } from "react-icons/tb";
import { MdOutlineTextFields, MdImage } from "react-icons/md";

export const Basic = () => {
  return (
    <Dropdown label="Basic">
      <BoxWrapper>
        <DragableComponent
          description="Container"
          Icon={TbContainer}
          UserComponent={<Element is={Container} id="sone" canvas />}
        />
        <DragableComponent
          description="Text"
          Icon={MdOutlineTextFields}
          UserComponent={
            <Typography
              tagName="p"
              children="welcome, please change template text"
            />
          }
        />
        <DragableComponent description="Image" Icon={MdImage} />
      </BoxWrapper>
    </Dropdown>
  );
};
