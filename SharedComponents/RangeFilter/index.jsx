import InputField from "../InputField";
import "./index.css";

const RangeFilter = ({ title, onChange, value, range }) => {
  const { min, max } = value;
  const { low: minSection, high: maxSection } = range;

  const handleMinChange = (e) => {
    const val = parseInt(e.target.value, 10);
    onChange(val, max);
  };

  const handleMaxChange = (e) => {
    const val = parseInt(e.target.value, 10);
    onChange(min, val);
  };

  return (
    <div className="filter-range">
      <div className="filter-range-label">
        Filter by {title} range {`(${minSection} to ${maxSection})`}:
      </div>
      <div className="filter-range-inputs">
        <InputField
          className="filter-range-input"
          type="number"
          placeholder="Min"
          value={min}
          onChange={handleMinChange}
        />
        <InputField
          className="filter-range-input"
          type="number"
          placeholder="Max"
          value={max}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};

export default RangeFilter;
