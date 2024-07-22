// src/components/NewBoxForm.js
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData({
      width: '',
      height: '',
      backgroundColor: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        type="number"
        name="width"
        id="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        name="height"
        id="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        type="text"
        name="backgroundColor"
        id="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;