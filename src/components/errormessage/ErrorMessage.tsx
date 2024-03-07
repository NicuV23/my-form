import React from "react";
import "./ErrorMessage.css";

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return error ? <p className="error-message">{error}</p> : null;
};

export default ErrorMessage;
