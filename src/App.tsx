import React, { useState } from "react";
import Form from "./components/form/Form";
import ErrorMessage from "./components/errormessage/ErrorMessage";
interface FormData {
  name: string;
  phoneNumber: string;
  select1: string;
  select2: string;
}

interface FormDataItem extends FormData {
  id: number;
}

const initialFormData: FormData = {
  name: "",
  phoneNumber: "",
  select1: "",
  select2: "",
};

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formItems, setFormItems] = useState<FormDataItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<FormDataItem | null>(null);

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
    } else {
      setError(null);

      if (editItem) {
        setFormItems((prevItems) =>
          prevItems.map((item) =>
            item.id === editItem.id ? (formData as FormDataItem) : item
          )
        );

        setEditItem(null);
      } else {
        setFormItems((prevItems) => [
          ...prevItems,
          { ...(formData as FormDataItem), id: Date.now() },
        ]);
      }

      setFormData(initialFormData);
    }
  };

  const handleEditItem = (id: number) => {
    const itemToEdit = formItems.find((item) => item.id === id);

    if (itemToEdit) {
      setEditItem(itemToEdit);

      setFormData(itemToEdit);
    }
  };

  const handleDeleteItem = (id: number) => {
    setFormItems((prevItems) => prevItems.filter((item) => item.id !== id));

    if (editItem && editItem.id === id) {
      setEditItem(null);
      setFormData(initialFormData);
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

      {formItems.length > 0 && (
        <div>
          <h2>Submitted Items:</h2>
          <ul>
            {formItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.phoneNumber} - {item.select1} -{" "}
                {item.select2}
                <button onClick={() => handleEditItem(item.id)}>Edit</button>
                <button onClick={() => handleDeleteItem(item.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
