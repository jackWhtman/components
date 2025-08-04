import "./index.css";

const RadioButton = ({ id, name, value, label, checked, onChange }) => {
  return (
    <div className="radio-container">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
