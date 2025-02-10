import React, { Children } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

const CustomModal = ({
  children,
  isOpen,
  onRequestClose,
  title = "Add Factory",
  width = "40%",
  minHeight = "80%",
  handleSave = () => {},
}) => {
  const customStyles = {
    content: {
      width: width,
      minHeight: minHeight,
      transform: "translate(-50%, -50%)",
      top: "50%",
      left: "50%",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% transparency
    },
  };

  return (
    <>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-2xl font-bold">{title}</p>
              <button onClick={onRequestClose}>
                <IoClose size={24} />
              </button>
            </div>
            {children}
          </div>
          <div className="flex justify-end gap-8 pb-4">
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={onRequestClose}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
