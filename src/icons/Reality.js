import React, {PropTypes} from 'react';

const IconReality = ({className, shapeClassName}) => (
  <svg viewBox="0 0 960 560" className={className}>
    <path
      className={shapeClassName}
      transform="matrix(1 0 0 1 137.2593 325.8516)"
      font-family="'AdobeDevanagari-Regular'"
      font-size="190.4735"
      letter-spacing="14"
    >
      (real)
    </path>
    <path
      className={shapeClassName}
      transform="matrix(1 0 0 1 612.5605 280)"
      font-family="'AdobeDevanagari-Regular'"
      font-size="190.4735"
      letter-spacing="14"
    >
      ity
    </path>
  </svg>
);

IconReality.propTypes = {
  className: PropTypes.string,
  shapeClassName: PropTypes.string,
};

export default IconReality;
