import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import "./index.css";

const DropdownMenu = ({ className, options, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({
    top: "100%",
    right: "100%",
  });
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (handlerFunction) => {
    handlerFunction();
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDropdown();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const updateMenuPosition = () => {
      if (!dropdownRef.current) return;

      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const { innerHeight } = window;

      // Default position: down and right
      let top = "auto";
      let left = "auto";
      let right = "100%";
      let bottom = "auto";

      // Adjust position if it overflows at the bottom
      if (dropdownRect.bottom > innerHeight - 200) {
        top = "auto";
        bottom = "100%";
      }

      setMenuPosition({ top, left, right, bottom });
    };

    if (isOpen) {
      updateMenuPosition();
      window.addEventListener("resize", updateMenuPosition);
    }

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
    };
  }, [isOpen]);
  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
      <Button className="dropdown-toggle" onClick={toggleDropdown}>
        {children}
      </Button>
      {isOpen && (
        <ul
          className="dropdown-menu"
          style={{
            top: menuPosition.top,
            left: menuPosition.left,
            right: menuPosition.right,
            bottom: menuPosition.bottom,
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              tabIndex={0}
              role="menuitem"
              onKeyDown={handleKeyDown}
              className={`dropdown-menu-item ${option.disabled ? "disabled" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                if (option.disabled) return;
                handleOptionClick(option.onClick);
              }}
            >
              {option.icon && <span className="icon">{option.icon}</span>}
              <span className="label">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
