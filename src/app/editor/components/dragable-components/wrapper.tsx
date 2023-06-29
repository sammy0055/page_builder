import { BoxContainer, BoxOne, BoxDescription } from "./styles/wrapper";

interface ComponentWrapperProps {
  Icon: any;
  description: string;
}

export const DragableComponent: React.FC<ComponentWrapperProps> = ({
  Icon,
  description,
}) => {
  return (
    <BoxContainer>
      <BoxOne>{<Icon size={40} />}</BoxOne>
      <BoxDescription>{description}</BoxDescription>
    </BoxContainer>
  );
};
