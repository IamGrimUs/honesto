import * as React from 'react';

export const Button = ({ text, buttonType, loginUser }) => {
  const handleClick = () => {
    loginUser();
  };
  return (
    <button className={buttonType} onClick={handleClick}>
      {text}
    </button>
  );
};