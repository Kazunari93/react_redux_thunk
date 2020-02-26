import React from "react";
import PropTypes from "prop-types";

const Click = props => {
  const { clickButton } = props;
  return <div onClick={clickButton}>{props.children}</div>;
};

Click.propTypes = {
  children: PropTypes.string.isRequired,
  clickButton: PropTypes.func.isRequired
};
export default Click;
