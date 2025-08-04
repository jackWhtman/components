import { useState } from "react";
import InputField from "../InputField";
import "./index.css";

export const ConfirmDelete = ({ title, onConfirm }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e, permanent = false) => {
    e.preventDefault();

    if (input === `Delete ${title}`) {
      onConfirm(permanent);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  const handlePaste = (event) => {
    event.preventDefault(); // Prevent pasting
  };
  const disabled = input !== `Delete ${title}`;
  return (
    <>
      <form id="confirm-delete-form">
        <h3 style={{ "margin-bottom": "1.5rem" }} className="no-select">
          Are you sure you want to delete {title} ?{" "}
        </h3>
        <InputField
          name={"confirm-delete-input"}
          type={"text"}
          placeholder={`Type "Delete ${title}" to confirm`}
          pattern={`^Delete ${title}$`}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          autoComplete="off"
          value={input}
          required
        />
      </form>
      <div className="confirm-delete-buttons-wrapper">
        <button
          className="delete-button common-button"
          onClick={(e) => handleSubmit(e, true)}
          disabled={disabled}
        >
          Permanent Delete
        </button>
        <button
          className="delete-button common-button"
          onClick={() => handleSubmit}
          disabled={disabled}
        >
          Archive (90 days)
        </button>
      </div>
    </>
  );
};
