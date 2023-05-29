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
export enum displayValues {
  flex = "flex",
  grid = "grid",
  block = "block",
  auto = "auto",
  row = "row",
  column = "column"
}
export type FlexProperties =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "baseline"
  | "block"
  | "row"
  | "column";
export type Styles = Partial<Spacing> & {
  width?: number;
  height?: string;
  minHeight?: number;
  backgroundColor?: string;
  display?: displayProperties;
  justifyContent?: FlexProperties;
  alignItems?: FlexProperties;
  flexDirection?: "row" | "column" | "auto";
};
