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
export type FlexProperties =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "baseline"
  | "block";
export type Styles = Partial<Spacing> & {
  width?: number;
  height?: string;
  minHeight?: number;
  backgroundColor?: string;
  display?: displayProperties;
  justifyContent?: FlexProperties;
  alignItems?: FlexProperties;
};
