import React from "react";

export default function Modal(props) {
  const { show, toggle, url } = props;
  return (
    <div className="background-modal">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-close">
            <img src="" onClick={() => toggle(!show)} alt="Close Modal" />
          </div>
        </div>
        <div className="modal-content">{url}</div>
      </div>
    </div>
  );
}
