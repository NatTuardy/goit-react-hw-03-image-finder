import React from 'react';
import PropTypes from 'prop-types';

const ErrorNotification = ({ text }) => (
  <hi>Whoops, something went wrong: {text}</hi>
);

export default ErrorNotification;

ErrorNotification.propTypes = {
  text: PropTypes.string,
};
