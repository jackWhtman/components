import Loader from "../Loader";
import "./index.css";

const InputField = ({
  className,
  type = "text",
  name,
  value,
  onChange,
  onKeyDown,
  onPaste,
  onBlur,
  autoComplete,
  label,
  required = false,
  placeholder = label,
  min,
  checked,
  max,
  title,
  maxLength,
  step,
  pattern,
  rows,
  options,
  optionIsMap,
  optionsLoading,
  info,
  readOnly = false,
  multiple = false,
  onWheel = (e) => {
    e.target.blur();
  },
}) => {
  const commonProps = {
    className,
    name,
    value,
    onChange,
    onKeyDown,
    onBlur,
    onPaste,
    autoComplete,
    required,
    placeholder,
    readOnly,
    title,
    pattern,
    checked,
    min,
    max,
    maxLength,
    onWheel,
    step,
    info,
  };
  const getOptions = () => {
    return optionIsMap ? Object.keys(options) : options;
  };

  return (
    <div className="input-field">
      {label && (
        <label className="input-field-label" htmlFor={name}>
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea id={name} {...commonProps} rows={rows} />
      ) : type === "select" ? (
        <select id={name} {...commonProps} multiple={multiple}>
          {!(value && value !== "") && (
            <option value="">--Please choose an option--</option>
          )}
          {optionsLoading && (
            <option value="">
              <Loader />
            </option>
          )}
          {options &&
            getOptions().map((option, index) => {
              if (option instanceof Object) {
                return option;
              } else {
                return (
                  <option key={index} value={option}>
                    {optionIsMap ? options[option] : option}
                  </option>
                );
              }
            })}
        </select>
      ) : (
        <>
          <input id={name} type={type} {...commonProps} />
        </>
      )}
      {info && <small className="input-info">{info}</small>}
    </div>
  );
};

export default InputField;
