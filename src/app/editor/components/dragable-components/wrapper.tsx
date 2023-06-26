import { useEditor } from "@craftjs/core";
import { BoxContainer, BoxOne, BoxDescription } from "./styles/wrapper";
import { Container } from "@/user-components/container";

interface ComponentWrapperProps {
  Icon: any;
  description: string;
  UserComponent?: any;
}

export const DragableComponent: React.FC<ComponentWrapperProps> = ({
  Icon,
  description,
  UserComponent,
}) => {
  const { connectors } = useEditor();
  return (
    <BoxContainer
      ref={(ref: any) => {
        connectors.create(ref, UserComponent);
      }}
    >
      <BoxOne>{<Icon size={40} />}</BoxOne>
      <BoxDescription>{description}</BoxDescription>
    </BoxContainer>
  );
};
