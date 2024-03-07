import React, { useState } from "react";
import Form from "./components/form/Form";
import FormDataDisplay from "./components/formdatadisplay/FormDataDisplay";
import ErrorMessage from "./components/errormessage/ErrorMessage";

interface FormData {
  name: string;
  phoneNumber: string;
  select1: string;
  select2: string;
}

const initialFormData: FormData = {
  name: "",
  phoneNumber: "",
  select1: "",
  select2: "",
};

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.phoneNumber.trim() === "" ||
      formData.select1.trim() === "" ||
      formData.select2.trim() === ""
    ) {
      setError("Fill in all fields and select options before submitting.");
      setShowDetails(false);
    } else {
      setError(null);
      setShowDetails(true);
    }
  };

  return (
    <div className="app-container">
      <h1>React Form with TypeScript</h1>

      <Form
        formData={formData}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
      />

      <ErrorMessage error={error} />

      {showDetails && (
        <FormDataDisplay formData={formData} showDetails={showDetails} />
      )}
    </div>
  );
};

export default App;
