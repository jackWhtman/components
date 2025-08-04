import { useEffect, useState } from "react";
import Button from "../Button";
import "./index.css";

const ScrollButton = ({ containerRef }) => {
  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("bottom");

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current.scrollTop > 0 &&
        containerRef.current.scrollTop >
          (containerRef.current.scrollHeight -
            containerRef.current.clientHeight) /
            2
      ) {
        setScrollDirection("top");
      } else {
        setScrollDirection("bottom");
      }

      setVisible(true);
    };
    let containerRefVar = containerRef.current;
    if (containerRefVar) {
      containerRefVar.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRefVar) {
        containerRefVar.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollDirection, containerRef]);

  const handleClick = () => {
    if (scrollDirection === "bottom") {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
      setScrollDirection("top");
    } else {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollDirection("bottom");
    }
  };

  return visible ? (
    <Button className="scroll-button" onClick={handleClick}>
      {scrollDirection === "bottom" ? "↓" : "↑"}
    </Button>
  ) : null;
};

export default ScrollButton;
