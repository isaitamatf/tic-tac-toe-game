import React, { MouseEventHandler } from "react";
import PropTypes from "prop-types";

export type ButtonComponentProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * @description Button component
 * @param {string} text
 * @param {Function} onClick
 * @returns {JSX}
 */
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, onClick }) => {
  return (
    <div className="ttt-button" data-testid="ttt-button">
      <button onClick={onClick}>
        <span>{text}</span>
      </button>
    </div>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

ButtonComponent.defaultProps = {
  text: "",
  onClick: () => {},
};

export { ButtonComponent };
