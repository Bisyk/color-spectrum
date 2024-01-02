import { createPortal } from "react-dom";

export const InfoModal = ({ modalIsOpen, onModalOpen }) => {
  return (
    <>
      {createPortal(
        modalIsOpen && (
          <div className="info-modal">
            <div className="info-window">
              <button onClick={onModalOpen}>X</button>
              <p>
                The compatibility factor must be greater than{" "}
                <strong>3.00</strong> for <strong>Icons & Large Text</strong>.
              </p>
              <p>
                The compatibility factor must be greater than{" "}
                <strong>5.00</strong> for <strong>Small text</strong>.
              </p>
            </div>
          </div>
        ),

        document.getElementById("modal")
      )}
    </>
  );
};
