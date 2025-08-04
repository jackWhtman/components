import { useState, useRef, useEffect } from "react";
import "./index.css";
import Button from "../Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const DropdownContainer = ({
  label,
  children,
  title,
  className,
  noChevron,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({
    top: "100%",
    right: "0",
    left: "auto",
    bottom: "auto",
  });
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
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

  return (
    <div className={`dropdown-container ${className}`} ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        className="dropdown-button"
        title={title}
      >
        {label}
        {!noChevron && <>&nbsp;&nbsp;</>}
        {!noChevron && (isOpen ? <FaChevronUp /> : <FaChevronDown />)}
      </Button>

      {isOpen && (
        <div
          className="dropdown-menu"
          style={{
            top: menuPosition.top,
            left: menuPosition.left,
            right: menuPosition.right,
            bottom: menuPosition.bottom,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownContainer;
