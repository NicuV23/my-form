import React from "react";
import "./FormDataDisplay.css";

interface FormData {
  name: string;
  phoneNumber: string;
  select1: string;
  select2: string;
}

interface FormDataDisplayProps {
  formData: FormData;
  showDetails: boolean;
}

const FormDataDisplay: React.FC<FormDataDisplayProps> = ({
  formData,
  showDetails,
}) => {
  return (
    <div className="details-container">
      <h2>Form Details:</h2>
      <p>Name: {formData.name}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Option 1: {formData.select1}</p>
      <p>Option 2: {formData.select2}</p>
    </div>
  );
};

export default FormDataDisplay;
