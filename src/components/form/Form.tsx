import React from "react";
import "./Form.css";

interface FormData {
  id?: number;
  name: string;
  phoneNumber: string;
  select1: string;
  select2: string;
}

interface FormProps {
  formData: FormData;
  onSubmit: (event: React.FormEvent) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Form: React.FC<FormProps> = ({
  formData,
  onSubmit,
  onInputChange,
  onSelectChange,
}) => {
  return (
    <form onSubmit={onSubmit} className="form-container">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          pattern="[0-9]{10}"
          onChange={onInputChange}
        />
      </label>
      <br />
      <label>
        Option 1:
        <select
          name="select1"
          value={formData.select1}
          onChange={onSelectChange}
        >
          <option value="">Select an option</option>
          <option value="option 1">Option 1</option>
          <option value="option 2">Option 2</option>
        </select>
      </label>
      <br />
      <label>
        Option 2:
        <select
          name="select2"
          value={formData.select2}
          onChange={onSelectChange}
        >
          <option value="">Select an option</option>
          <option value="option A">Choice A</option>
          <option value="option B">Choice B</option>
        </select>
      </label>
      <br />
      <button className="submit" type="submit">
        {formData.id ? "Save" : "Submit"}
      </button>
    </form>
  );
};

export default Form;
