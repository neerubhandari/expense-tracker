import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  disabled = false,
}) => {
  const baseClass =
    "px-6 py-2 rounded-lg text-white transition-colors duration-300";
  const variants = {
    primary: "bg-primary hover:bg-hover",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  const finalClass = `${baseClass} ${variants[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <button className={finalClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
