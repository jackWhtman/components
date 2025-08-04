import { useState } from "react";
import RadioButton from "../RadioButtons";
import "./index.css";

export const FileInput = ({ className, handleFileChange }) => {
  const [selectionMode, setSelectionMode] = useState("folder");

  const handleModeChange = (event) => {
    setSelectionMode(event.target.value);
  };

  const handleChange = (e) => {
    handleFileChange(e);
  };

  return (
    <div className="folder-file-selection">
      <div className="selection-mode-toggle">
        <RadioButton
          id="folderMode"
          name="folderSelectionMode"
          value="folder"
          label="Select Folder"
          checked={selectionMode === "folder"}
          onChange={handleModeChange}
        />
        <RadioButton
          id="filesMode"
          name="fileSelectionMode"
          value="files"
          label="Select Multiple Files"
          checked={selectionMode === "files"}
          onChange={handleModeChange}
        />
      </div>

      <div className="file-input-container">
        {selectionMode === "folder" ? (
          <input
            type="file"
            webkitdirectory="true"
            onChange={handleChange}
            className="file-input"
          />
        ) : (
          <input
            type="file"
            multiple
            onChange={handleChange}
            className="file-input"
          />
        )}
        <button className={`file-input-button ${className || ""}`}>
          {selectionMode === "folder"
            ? "Select / Drag and Drop Dataset Folder here"
            : "Select / Drag and Drop Files here"}
        </button>
      </div>
    </div>
  );
};
