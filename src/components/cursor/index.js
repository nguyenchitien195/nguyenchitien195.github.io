import React from 'react';
import PropTypes from 'prop-types';

import './cursor.css';

const CursorCustom = ({ className }) => (
  <span className="cursor-end"></span>
);

CursorCustom.propTypes = { className: PropTypes.string };
CursorCustom.defaultProps = { className: '' };

export default CursorCustom;