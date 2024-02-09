import { memo } from "react";
import ActiveUsers from "./users/ActiveUsers";
import { navElements } from "../../constants";
import ShapesMenu from "./ShapesMenu";

const Navbar = ({
  activeElement,
  imageInputRef,
  handleImageUpload,
  handleActiveElement,
}) => {
  const isActive = (value) => {
    return (
      (activeElement && activeElement.value === value) ||
      (Array.isArray(value) &&
        value.some((val) => val?.value === activeElement?.value))
    );
  };

  return (
    <nav className="flex select-none items-center justify-between gap-4 px-5 text-white bg-black h-[50px]">
      <img src="/assets/logo.svg" alt="FigPro Logo" width={58} height={20} />

      <ul className="flex flex-row">
        {navElements.map((item) => {
          return (
            <li
              key={item.name}
              onClick={() => {
                if (Array.isArray(item.value)) return;
                handleActiveElement(item);
              }}
              className={`group p-2 flex justify-center items-center cursor-pointer m-1
            ${isActive(item.value) ? "bg-green-400" : "hover:bg-slate-700"}
            `}
            >
              {/* If value is an array means it's a nav element with sub options i.e., dropdown */}
              {Array.isArray(item.value) ? (
                <ShapesMenu
                  item={item}
                  activeElement={activeElement}
                  imageInputRef={imageInputRef}
                  handleActiveElement={handleActiveElement}
                  handleImageUpload={handleImageUpload}
                />
              ) : item?.value === "comments" ? (
                // If value is comments, trigger the NewThread component
                <button className="relative w-5 h-5 object-contain">
                  <img
                    src={item.icon}
                    alt={item.name}
                    fill
                    className={isActive(item.value) ? "invert" : ""}
                  />
                </button>
              ) : (
                <button className="relative w-5 h-5 object-contain">
                  <img
                    src={item.icon}
                    alt={item.name}
                    fill
                    className={isActive(item.value) ? "invert" : ""}
                  />
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <ActiveUsers />
    </nav>
  );
};

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
