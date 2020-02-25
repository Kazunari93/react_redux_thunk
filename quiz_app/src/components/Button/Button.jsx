import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { clickAnswer } = props;
  return <div onClick={clickAnswer}>{props.children}</div>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  clickAnswer: PropTypes.func.isRequired
};
export default Button;
