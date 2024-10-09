import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Button = ({ buttonText, buttonType, isDisabled, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <button 
      disabled={isDisabled}
      type={buttonType}
      id="next-btn"
      onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
