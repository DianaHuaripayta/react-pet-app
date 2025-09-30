import { useState } from "react";
export const useFormulario = (initialState = {}) => {
    const [form, setForm] = useState(initialState);
    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,   // usa el name del input/select como clave
    }));
  };

    const resetForm = () => {
        setForm(initialState);
    }
    return {
        form,
        handleChange,
        resetForm
    }
}