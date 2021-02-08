import React from "react";
import './modal.css';

const Modal = ({ visible, children }) => {
  return (
    <React.Fragment>
      {visible && (
        <div className="modal">
          <div className="wrapper">
            <div className="inner">
              {children}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
