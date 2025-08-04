import { useState } from "react";
import CloseIcon from "../../../assets/images/closeIcon.svg";
import Button from "../Button";
import InputField from "../InputField";
import "./index.css";

const ChipInput = ({
  placeholder = "Enter a value",
  maxChips = 10,
  onChange,
  values,
  name,
  required = false,
}) => {
  const [chips, setChips] = useState(values.length ? values : []);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value) => {
    if (value && !chips.includes(value) && chips.length < maxChips) {
      const updatedChips = [...chips, value];
      setChips(updatedChips);
      setInputValue("");
      onChange(updatedChips);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = inputValue.trim().toLowerCase();
      handleChange(value);
    }
    if (e.key === "Backspace" && !inputValue && chips.length) {
      const updatedChips = chips.slice(0, -1);
      setChips(updatedChips);
      onChange(updatedChips);
    }
  };

  const handleRemoveChip = (index) => {
    const updatedChips = chips.filter((_, i) => i !== index);
    setChips(updatedChips);
    onChange(updatedChips);
  };

  return (
    <div className="chip-input">
      <div className="chip-input-container">
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            <div className="chip-text">{chip}</div>
            <Button
              className={"delete-chip-button"}
              type="button"
              onClick={() => handleRemoveChip(index)}
            >
              <CloseIcon />
            </Button>
          </div>
        ))}
        {maxChips > chips.length && (
          <InputField
            type="text"
            value={inputValue}
            name={name}
            placeholder={placeholder + ` (Max: ${maxChips})`}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onBlur={() => {
              const value = inputValue.trim().toLowerCase();
              handleChange(value);
            }}
            onKeyDown={handleKeyDown}
            className="chip-text-input"
            required={required}
          />
        )}
      </div>
    </div>
  );
};

export default ChipInput;
