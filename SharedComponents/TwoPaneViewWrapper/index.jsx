import "./index.css";
const TwoPaneViewWrapper = ({
  children,
  className,
  paneWidth = "20vw",
  style,
}) => {
  return (
    <div
      className={`two-pane-view-wrapper ${className || ""}`}
      style={{
        ...style,
        "--pane-width": paneWidth,
      }}
    >
      {children}
    </div>
  );
};

export default TwoPaneViewWrapper;
