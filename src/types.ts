export interface Spacing {
  padding: number;
  paddingRight: number;
  paddingLeft: number;
  paddingTop: number;
  paddingBottom: number;
  margin: number;
  marginRight: number;
  marginLeft: number;
  marginTop: number;
  marginBottom: number;
}

export type displayProperties = "flex" | "grid" | "none" | "auto";
export type justifyContentProperties =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around";
export type alignItemsProperties =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";
export type Styles = Partial<Spacing> & {
  width?: number;
  height?: string;
  minHeight?: number;
  backgroundColor?: string;
  display?: displayProperties;
  justifyContent?: justifyContentProperties;
  alignItems?: alignItemsProperties;
};
