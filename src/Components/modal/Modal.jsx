import React, { Fragment, useEffect, useRef } from "react";

const Modal = ({ isActive, head = "Some Heading", message }) => {
  const buttonRef = useRef();
  useEffect(() => {
    isActive ? buttonRef.current.click() : null;
  }, []);
  return (
    <Fragment>
      {/* The button to open modal */}
      <label ref={buttonRef} htmlFor="my-modal" className="btn hidden">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{head}</h3>
          {message ? <p className="py-4">{message}</p> : null}
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
