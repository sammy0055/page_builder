import Dropdown from "@/app/editor/components/dropdown";
import { Dimention } from "@/app/editor/components/dimension";
import { Slider } from "@/app/editor/components/slider";
import { useCustomStyles } from "@/hooks/custom-styles";
import styles from "./image.module.css";

export const ImageWrappersetting = () => {
    const {
      handleChangeSpacing,
      handleImageUrl,
      paddingTop,
      paddingBottom,
      marginTop,
      marginBottom,
      paddingRight,
      paddingLeft,
      marginRight,
      marginLeft,
    } = useCustomStyles();
  
    const dimensionsValue: any = {
      paddingTop,
      paddingBottom,
      marginTop,
      marginBottom,
      paddingRight,
      paddingLeft,
      marginRight,
      marginLeft,
    };
  
    
    return (
      <>
        <Dropdown label="spacing">
          <Dimention
            dimensionsValue={dimensionsValue}
            handleChange={handleChangeSpacing}
          />
          <Slider label="height" />
          <Slider label="margin" />
          <Slider label="padding" />
        </Dropdown>
        <Dropdown label="add image">
          <div className={styles.file_input_container}>
            <label className={styles.file_label}>
              <i className={styles.material_icons}>attach_file</i>
              <span className={styles.file_name}>Choose a file</span>
            </label>
            <input type="file" onChange={handleImageUrl} />
          </div>
        </Dropdown>
      </>
    );
  };