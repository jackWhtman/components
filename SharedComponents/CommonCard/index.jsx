import { timeAgo } from "../../../utils/general-helper";
import Button from "../Button";
import "./index.css";

export const CommonCard = ({
  className,
  title,
  subTitle,
  handleCardClick,
  options,
  children,
  timeStamp,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleCardClick();
    }
  };

  return (
    <div
      role={"button"}
      className={`card ${className}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {timeStamp && (
        <div className="card-time-ago">{timeAgo(Date.parse(timeStamp))}</div>
      )}
      <div>
        <h4 className="card-title">{title}</h4>
        {subTitle && <span className="card-subtitle">{subTitle}</span>}
      </div>
      {children && <div className="common-card-content">{children}</div>}
      <div className={"common-card-buttons-conatiner"}>
        {options?.length > 0 &&
          options.length <= 3 &&
          options.map((i, index) => (
            <Button
              key={index}
              className="card-icon-button"
              disabled={i.disabled}
              onClick={(e) => {
                e.stopPropagation();
                i.onClick();
              }}
            >
              {i.icon}
            </Button>
          ))}
      </div>
    </div>
  );
};
