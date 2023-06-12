
export const commonStyles = (style: any) => {
  return {
    padding: `${style?.padding}px` || "auto",
    paddingRight: `${style?.paddingRight}px` || "auto",
    paddingLeft: `${style?.paddingLeft}px` || "auto",
    paddingTop: `${style?.paddingTop}px` || "auto",
    paddingBottom: `${style?.paddingBottom}px` || "auto",
    margin: `${style?.margin}px` || "auto",
    marginRight: `${style?.marginRight}px` || "auto",
    marginLeft: `${style?.marginLeft}px` || "auto",
    marginTop: `${style?.marginTop}px` || "auto",
    marginBottom: `${style?.marginBottom}px` || "22px",
  };
};
