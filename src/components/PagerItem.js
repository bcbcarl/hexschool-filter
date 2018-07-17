import React from 'react';

const PagerItem = ({ children, active }) => {
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '41px',
    height: '42px',
    color: '#9013fe',
    backgroundColor: '#fff'
  };

  const activeStyle = {
    color: '#fff',
    backgroundColor: '#9013fe'
  };

  const style = active ? { ...baseStyle, ...activeStyle } : baseStyle;
  return <div style={style}>{children}</div>;
};

export default PagerItem;
