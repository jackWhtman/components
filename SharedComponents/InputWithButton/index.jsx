import Button from "../Button";
import InputField from "../InputField";
import "./index.css";
const InputWithButton = ({
  inputProps,
  buttonIcon,
  buttonLabel,
  buttonAction,
  buttonDisabled,
  buttonClassName,
}) => {
  return (
    <div className="input-with-button">
      <InputField {...inputProps} />

      <Button
        className={`input-button ${buttonClassName || ""}`}
        onClick={buttonAction}
        disabled={buttonDisabled}
        title={buttonLabel || "Click"}
      >
        {buttonIcon}
      </Button>
    </div>
  );
};

export default InputWithButton;
