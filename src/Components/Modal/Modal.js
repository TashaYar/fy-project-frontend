import React from "react";
import { InnerCont, OuterCont } from "./Modal.styles";
import Close from "@mui/icons-material/Close";

const Modal = (props) => {
  return (
    <OuterCont
      onClick={() => {
        if (props?.onClose) {
          props.onClose();
        }
      }}
    >
      <InnerCont
        height={props.height}
        width={props.width}
        isOpen={true}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div className="modalHeader">
          <h2>{props.header}</h2>
          <span
            onClick={() => {
              if (props?.onClose) {
                props.onClose();
              }
            }}
          >
            <Close />
          </span>
        </div>
        <div className="modalBody">{props.children}</div>
      </InnerCont>
    </OuterCont>
  );
};

export default Modal;
