import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

// destructure the quotes prop and then output JSON.stringify(quotes) in div with quotes and wrapper class
// instead of JSON.stringify(quotes), map over quotes array and output one QuoteCard for each quote - pass the quote object as a prop
// destructure the category and categories props from App.js - line 9
// pass new state through quotes themselves and to Category Form

function Quotes ({ filteredQuotes, categories, category, handleCategoryChange}) {
    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                <div className="category-header">
                    <p>Browse through your collection of quotes</p>
                    <CategoryForm category={category} categories={categories} handleCategoryChange={handleCategoryChange}/>
                </div>
                {Quotes.map((quote) => (
                    <QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
        </section>
    );
}

export default Quotes;