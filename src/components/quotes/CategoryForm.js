import React from "react";
import { Filter } from "react-feather";

// destructure categories array and category state
// set value of select element to category state, passed down to CategoryForm component from App.js
// destructure handleCategoryChange and create onChange event listener

function CategoryForm({ categories, category, handleCategoryChange }) {
    return (
        <div className="category-form">
            <Filter />
            <form className="category-filter">
                <label htmlFor="category">Filter Quotes:</label>
                <select id="category" name="category" value={category} onChange={handleCategoryChange}>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default CategoryForm;