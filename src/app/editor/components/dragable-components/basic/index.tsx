import Dropdown from "../../dropdown";
import { BoxWrapper } from "../styles/wrapper";
import { DragableComponent } from "../wrapper";

//icons 
import { TbContainer } from "react-icons/tb";
import { MdOutlineTextFields, MdImage } from "react-icons/md";

export const Basic = () => {
  return (
    <Dropdown label="Basic">
      <BoxWrapper>
        <DragableComponent description="Container" Icon={TbContainer} />
              <DragableComponent description="Text" Icon={MdOutlineTextFields} />
              <DragableComponent description="Image" Icon={MdImage} />
      </BoxWrapper>
    </Dropdown>
  );
};
