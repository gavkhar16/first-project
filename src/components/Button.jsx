import React from 'react';

export const Button = ({ buttonText, buttonType, isDisabled, buttonClick,  }) => {
  return (
    <button 
    disabled={isDisabled}
    type={buttonType}
    id="next-btn"
    onClick={buttonClick}>
      {buttonText}
    </button>
  );
};

export default Button