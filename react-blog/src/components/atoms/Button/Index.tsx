import React from "react";
import "./button.scss";

export interface ButtonProps {
  icon?: React.ReactNode;
  buttonClassName?: "primary" | "primary-container" | "on-primary-container";
  size?: "sm" | "md" | "lg";
  content: string;
  onClick?: () => void;
  testID?: string
}

export const Button = ({buttonClassName="primary", size="md", ...props}: ButtonProps) => {
  const {icon, content, testID, onClick} = props

  return (
    <div className="button-wrapper">
      <button 
        className={`button-${buttonClassName}`} 
        data-testid={testID} 
        onClick={onClick}
      >
        <span className="button-icon">{icon}</span>
        <span className="button-content">{content}</span>
      </button>
    </div>
  )
}