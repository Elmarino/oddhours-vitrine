import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 border border-white rounded-full text-white text-lg font-semibold transition hover:text-accent hover:border-accent"
    >
      <span>☞</span>
      {text}
    </button>
  );
};

export default Button;
