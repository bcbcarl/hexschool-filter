import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const BaseFaIcon = ({ type, icon, size, color }) => {
  const prefix = type === 'outline' ? 'far' : 'fas';
  return <FontAwesomeIcon icon={[prefix, icon]} size={size} color={color} />;
};

BaseFaIcon.defaultProps = {
  type: 'filled'
};

export default BaseFaIcon;
