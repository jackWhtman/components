import { useEffect, useRef, useState } from "react";
import "./index.css";

const Tooltip = ({ children, content, position = "bottom", handleClick }) => {
  const [tooltipPosition, setTooltipPosition] = useState(position);
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const updateTooltipPosition = () => {
      const tooltip = tooltipRef.current;
      const target = targetRef.current;

      if (!tooltip || !target) return;

      const { top, left, height, width } = target.getBoundingClientRect();
      const { innerWidth, innerHeight } = window;

      // Set initial position based on the passed `position` prop
      let newTooltipPosition = position;

      // Define positions based on available space
      const positions = {
        bottom: top + height + tooltip.offsetHeight > innerHeight,
        top: top - tooltip.offsetHeight < 0,
        left: left - tooltip.offsetWidth < 0,
        right: left + width + tooltip.offsetWidth > innerWidth,
      };

      // Change position if there is no space in the current direction
      if (positions[position]) {
        newTooltipPosition =
          position === "bottom" || position === "top"
            ? positions.top
              ? "bottom"
              : "top"
            : positions.left
              ? "right"
              : "left";
      }

      setTooltipPosition(newTooltipPosition);
    };
    updateTooltipPosition();
    window.addEventListener("resize", updateTooltipPosition);
    return () => {
      window.removeEventListener("resize", updateTooltipPosition);
    };
  }, [position]);

  const handleTooltipClick = (e) => {
    e.stopPropagation();
    if (handleClick) handleClick();
  };

  return (
    <div
      ref={targetRef}
      className={`tooltip tooltip-${tooltipPosition}`}
      onClick={handleTooltipClick}
    >
      {children}
      {content && (
        <span ref={tooltipRef} className={`tooltiptext`}>
          {content}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
