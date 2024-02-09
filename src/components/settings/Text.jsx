import { Select, SelectItem } from "@nextui-org/react";
import {
  fontFamilyOptions,
  fontSizeOptions,
  fontWeightOptions,
} from "../../../constants/";

const selectConfigs = [
  {
    property: "fontFamily",
    placeholder: "Choose a font",
    options: fontFamilyOptions,
  },
  {
    property: "fontWeight",
    placeholder: "Semibold",
    options: fontWeightOptions,
  },
  { property: "fontSize", placeholder: "Font size", options: fontSizeOptions },
];

const Text = ({ fontFamily, fontSize, fontWeight, handleInputChange }) => {
  return (
    <div className="flex flex-col gap-3 border-b border-primary-grey-200 px-5 py-3">
      <h3 className="text-[10px] uppercase">Text</h3>

      <div className="flex flex-col gap-3">
        {RenderSelect({
          config: selectConfigs[0],
          fontSize,
          fontWeight,
          fontFamily,
          handleInputChange,
        })}

        <div className="flex gap-2">
          {selectConfigs.slice(1).map((config) =>
            RenderSelect({
              config,
              fontSize,
              fontWeight,
              fontFamily,
              handleInputChange,
            })
          )}
        </div>
      </div>
    </div>
  );
};

const RenderSelect = ({
  config,
  fontSize,
  fontWeight,
  fontFamily,
  handleInputChange,
}) => (
  <>
    <Select
      label={
        config.property === "fontFamily"
          ? "Choose a font"
          : config.property === "fontSize"
          ? "FontSize"
          : "Semibold"
      }
      key={config.property}
      onChange={(e) => handleInputChange(config.property, e.target.value)}
      value={
        config.property === "fontFamily"
          ? fontFamily
          : config.property === "fontSize"
          ? fontSize
          : fontWeight
      }
    >
      {config.options.map((option) => (
        <SelectItem
          key={option.value}
          value={option.value}
          className=" hover:bg-primary-green hover:text-primary-black"
        >
          {option.label}
        </SelectItem>
      ))}
    </Select>
  </>
);

export default Text;
