import "./index.css";

const Button = ({
  onClick,
  style,
  children,
  className,
  title,
  disabled = false,
  id,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <div
      role="button"
      tabIndex="0"
      style={style}
      className={`${className || ""} common-button ${disabled ? "disabled" : ""} no-select`}
      id={id}
      onClick={handleButtonClick}
      onKeyDown={handleKeyDown}
      title={title}
      disabled={disabled}
    >
      {children}
    </div>
  );
};

export default Button;
