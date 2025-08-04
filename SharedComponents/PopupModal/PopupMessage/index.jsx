const convertNewlinesToBr = (text) => {
  return (
    <p>
      {text.split("\n").map((line) => (
        <>
          {line}
          <br />
        </>
      ))}
    </p>
  );
};
export const PopupMessage = ({
  title,
  message,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <div className="modal-content">
      <h3 className="modal-title">{title}</h3>
      {message && convertNewlinesToBr(message)}
      {/* {children} */}
      <div className="button-container">
        {primaryButtonText && (
          <button className="primary-button" onClick={onPrimaryButtonClick}>
            {primaryButtonText}
          </button>
        )}
        {secondaryButtonText && (
          <button className="secondary-button" onClick={onSecondaryButtonClick}>
            {secondaryButtonText}
          </button>
        )}
      </div>
    </div>
  );
};
