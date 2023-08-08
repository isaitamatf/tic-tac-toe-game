import React, { ReactNode } from "react";
import PropTypes from "prop-types";

export type ModalComponentProps = {
  children: ReactNode;
};

/**
 * @description Modal component
 * @param {string} result
 * @param {Function} onClickButtonModal
 * @returns {JSX}
 */
const ModalComponent: React.FC<ModalComponentProps> = ({ children }) => {
  return (
    <div className="ttt-modal" data-testid="ttt-modal">
      <div className="ttt-modal-container">{children}</div>
    </div>
  );
};

ModalComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

ModalComponent.defaultProps = {
  children: <></>,
};

export { ModalComponent };
