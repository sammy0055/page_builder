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
  column = "column",
}
export enum FlexPropertiesEnum {
  FlexStart = "flex-start",
  FlexEnd = "flex-end",
  Center = "center",
  SpaceAround = "space-around",
  Baseline = "baseline",
  Block = "block",
  Row = "row",
  Column = "column",
  Wrap = "wrap",
  Nowrap = "nowrap",
}
export type layoutProperties =
  | "display"
  | "justifyContent"
  | "alignItems"
  | "flexDirection"
  | "flexWrap";
export type FlexProperties =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "baseline"
  | "block"
  | "row"
  | "column"
  | "wrap"
  | "nowrap";
export type Styles = Partial<Spacing> & {
  width?: number;
  height?: string;
  minHeight?: number;
  backgroundColor?: string;
  display?: displayProperties;
  justifyContent?: FlexProperties;
  alignItems?: FlexProperties;
  flexDirection?: "row" | "column" | "auto";
  flexWrap?: "wrap" | "nowrap";
};
