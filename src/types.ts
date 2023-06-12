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

export type Styles = Partial<Spacing> & {
  width?: number;
  height?: string;
  minHeight?: number;
  backgroundColor?: string;
};
