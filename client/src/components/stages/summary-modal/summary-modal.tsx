import * as React from "react";
import "./summary-modal.css";
import ReactDOM from "react-dom";

export interface SummaryModalprops {
  handleClose: () => void;
  show: boolean;
}

export class SummaryModal extends React.Component<SummaryModalprops> {
  render() {
    const { show } = this.props;
    return show
      ? ReactDOM.createPortal(
          <div className="modal display-block">
            <div className="modal-main">
              {this.props.children}
              <div className="close-button" onClick={this.handleClose}>
                Close
              </div>
            </div>
          </div>,
          document.body
        )
      : null;
  }

  handleClose = () => {
    this.props.handleClose && this.props.handleClose();
  };
}
