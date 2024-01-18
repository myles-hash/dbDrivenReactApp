import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function FormPage() {
    const [formValues, setFormValues] = useState ({
        title: "",
        content: ""
    });
    const [searchParams, setSearchParams] = useSearchParams();

    function handleSubmit(event) {
        event.preventDefault();
        console.log("The form values are:", formValues);
    }

    function handleInputChange(event) {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    }
    
    const handleChange = (event) => {
        setSearchParams({ sort: event.target.value });
      };
    

    return (
        <>
        <h2>Add a New Post</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input 
            type="text"
            id="title" 
            name="title" 
            value={formValues.title} 
            onChange={handleInputChange}/>
            <label htmlFor="content">Content:</label>
            <input 
            type="text" 
            id="content"
            name="content"
            value={formValues.content}
            onChange={handleInputChange}/>
            <label htmlFor="category">Category:
            <select value={searchParams.get("sort") || ""} onChange={handleChange}>
                <option value="">Select a category</option>
                <option value="tech">Technology</option>
                <option value="life">Lifestyle</option>
                <option value="edu">Education</option>
            </select>
            </label>
            <button type="submit">Add Post</button>
        </form>
        </>
    )
}