import * as React from 'react';

export const Button = ({ text, buttonType, buttonAction }) => {
  const handleClick = () => {
    buttonAction();
  };
  return (
    <button className={buttonType} onClick={handleClick}>
      {text}
    </button>
  );
};