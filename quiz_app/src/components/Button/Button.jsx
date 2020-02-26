import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { clickButton } = props;
  return <div onClick={clickButton}>{props.children}</div>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  clickButton: PropTypes.func.isRequired
};
export default Button;
