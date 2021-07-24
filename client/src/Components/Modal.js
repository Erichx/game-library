import React from "react";

export default function Modal(props) {
  const { url, setModal } = props;
  return (
    <div className="background-modal" onClick={() => setModal("")}>
      <div className="modal">
        <div className="modal-header">
          <div className="modal-close" onClick={() => setModal("")}>
            <i class="bi bi-x"></i>
          </div>
        </div>
        <iframe
          className="modal-content"
          src={url}
          title="description"
        ></iframe>
      </div>
    </div>
  );
}
