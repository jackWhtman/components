import CloseIcon from "../../../assets/images/closeIcon.svg";
import Button from "../Button";
import Loader from "../Loader";
import "./index.css";
import { PopupMessage } from "./PopupMessage";

const PopupModal = ({
  title,
  message,
  isLoading,
  children,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  closePopUp,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {closePopUp && (
              <div className="modal-close-container">
                <Button className="modal-close-button" onClick={closePopUp}>
                  <CloseIcon width="2rem" height="2rem" />
                </Button>
              </div>
            )}
            {children ? (
              children
            ) : (
              <PopupMessage
                message={message}
                title={title}
                primaryButtonText={primaryButtonText}
                secondaryButtonText={secondaryButtonText}
                onPrimaryButtonClick={onPrimaryButtonClick}
                onSecondaryButtonClick={onSecondaryButtonClick}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PopupModal;
