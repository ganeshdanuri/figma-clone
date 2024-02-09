import { Input, Tooltip } from "@nextui-org/react";

const dimensionsOptions = [
  { label: "W", property: "width" },
  { label: "H", property: "height" },
];

const Dimensions = ({ width, height, isEditingRef, handleInputChange }) => (
  <section className="flex flex-col border-b border-primary-grey-200">
    <div className="flex flex-col gap-4 px-6 py-3">
      {dimensionsOptions.map((item) => (
        <div
          key={item.label}
          className="flex flex-1 items-center gap-3 rounded-sm"
        >
          <Tooltip content={item.label === "W" ? "Width" : "Height"}>
            <label htmlFor={item.property}>{item.label}</label>
          </Tooltip>
          <Input
            id={item.property}
            type="number"
            value={item.property === "height" ? height : width}
            placeholder="100"
            labelPlacement="outside"
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">px</span>
              </div>
            }
            onChange={(e) => handleInputChange(item.property, e.target.value)}
            onBlur={() => (isEditingRef.current = false)}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Dimensions;
