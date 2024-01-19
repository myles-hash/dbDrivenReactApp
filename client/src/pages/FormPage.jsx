import { useState } from "react";

export function FormPage() {
    const [formValues, setFormValues] = useState ({
        title: "",
        content: "",
        category_id: "",
    });


    const handleSubmit = async (event) => {
        event.preventDefault();
    
          await fetch("https://reactserver-q3ak.onrender.com/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
          });
    
    
          setFormValues({
            title: "",
            content: "",
            category_id: "",
          });
    
        
      };
    

    const handleInputChange = (event) => {
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value,
        });
      };

      const handleSelectChange = (event) => {
        setFormValues({
          ...formValues,
          category_id: event.target.value,
        });
      };


    

    return (
        <>
        <h2 id="title-top">Add a New Post</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input 
            type="text"
            id="title" 
            name="title" 
            value={formValues.title} 
            onChange={handleInputChange}
            required/>
            <label htmlFor="content">Content:</label>
            <input 
            type="text" 
            id="content"
            name="content"
            value={formValues.content}
            onChange={handleInputChange}
            required/>
            <label htmlFor="category">Category:</label>
        <select
          value={formValues.category_id}
          onChange={handleSelectChange}
          id="category"
          name="category"
          required
        >
          <option value="">Select a category</option>
          <option value="1">Technology</option>
          <option value="2">Lifestyle</option>
          <option value="3">Education</option>
        </select>
            <button type="submit">Add Post</button>
        </form>
        </>
    )
}