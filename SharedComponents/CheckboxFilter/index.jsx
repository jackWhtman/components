import { useEffect, useState } from "react";
import "./index.css";

const CheckboxFilter = ({
  title,
  options,
  optionIsKeyValue,
  onChange,
  selectedOptions,
}) => {
  const [internalSelectedFilters, setInternalSelectedFilters] = useState([]);
  useEffect(() => {
    if (selectedOptions) {
      setInternalSelectedFilters(selectedOptions);
    }
  }, [selectedOptions]);
  const handleCheckboxChange = (option) => {
    const currentIndex = internalSelectedFilters.indexOf(option);
    const newSelectedFilters = [...internalSelectedFilters];

    if (currentIndex === -1) {
      newSelectedFilters.push(option);
    } else {
      newSelectedFilters.splice(currentIndex, 1);
    }

    setInternalSelectedFilters(newSelectedFilters);
    onChange(newSelectedFilters);
  };

  const getOptions = () => {
    return optionIsKeyValue ? Object.keys(options) : options;
  };

  return (
    <div className="checkbox-filter">
      <div className={"filter-label"}>{title}</div>
      <div className="checkbox-filter-options">
        {getOptions().map(
          (option) =>
            option && (
              <div key={option}>
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={
                      internalSelectedFilters.includes(option) ||
                      options.length === 1
                    }
                    onChange={() => handleCheckboxChange(option)}
                    disabled={options.length === 1}
                  />
                  {` ${optionIsKeyValue ? options[option] : option}`}
                </label>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CheckboxFilter;
