import React, { useState } from "react";
import "./Form.css";

export const Form = ({ getFormData, formData, editId }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) return;
    getFormData({ title });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          key={editId} // ⭐ This resets input on edit change
          className="inputFeild"
          type="text"
          placeholder="Enter Title..."
          value={editId !== null ? formData?.title ?? "" : title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">{editId !== null ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};
