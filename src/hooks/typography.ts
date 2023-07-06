import { useNode } from "@craftjs/core";

export const useTypographySettings = () => {
  const {
    actions: { setProp },
    tagName,
    fontSize,
    fontWeight,
  } = useNode((node) => ({
    fontSize: node.data?.props?.fontSize as number,
    fontWeight: node.data?.props?.fontWeight as number,
    tagName: node.data?.props?.tagName as string,
  }));

  const handleTypographySettings = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setProp((props: any) => (props[name] = value));
  };

  return {
    handleTypographySettings,
    tagName,
    fontSize,
    fontWeight,
  };
};
