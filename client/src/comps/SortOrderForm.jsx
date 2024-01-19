import React from "react";
import { useNavigate } from "react-router-dom";

export default function SortOrderForm() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const category_id = event.target.value;
    navigate(`/posts${category_id ? `?category_id=${category_id}` : ""}`);
  };

  return (
    <form>
      <label>
        Sort by:
        <select value={new URLSearchParams(window.location.search).get("category_id") || ""} onChange={handleChange}>
          <option value="">Select a category</option>
          <option value="1">Technology</option>
          <option value="2">Lifestyle</option>
          <option value="3">Education</option>
        </select>
      </label>
    </form>
  );
}