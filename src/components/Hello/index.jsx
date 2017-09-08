import React, { PropTypes } from 'react';

const Button = ({ value, children }) => (
  <button onClick={() => alert(value)}>{children}</button>
);

Button.defaultProps = {
  children: <p>Default children</p>,
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;
