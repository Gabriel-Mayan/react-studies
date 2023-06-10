import React from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnValue: string | React.ReactNode 
}

export const Button = ({ className, type, value, style, onClick }: ButtonProps) => {
  return(
    <button type={type} className={className} style={style} onClick={onClick}>
      { value }
    </button>
  );
};