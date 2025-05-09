import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

// destructure the quotes prop and then output JSON.stringify(quotes) in div with quotes and wrapper class
// instead of JSON.stringify(quotes), map over quotes array and output one QuoteCard for each quote - pass the quote object as a prop
// destructure the category and categories props from App.js
// pass new state through quotes themselves and to Category Form
// destructure the addToFavorites

function Quotes({ filteredQuotes, categories, category, handleCategoryChange, addToFavorites, favoriteQuotes}) {
    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                <div className="category-header">
                    <h2>Pick your Favorite Quotes Below</h2>
                    <p>Browse through your collection of quotes</p>
                    <p>You have a collection of {Quotes.number} inspiring {category} quotes!</p>
                    <CategoryForm category={category} categories={categories} handleCategoryChange={handleCategoryChange} addToFavorites={addToFavorites} />
                </div>
                {filteredQuotes.map((quote) => (
                    <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites}favoriteQuotes={favoriteQuotes}/>
                ))}
            </div>
        </section>
    );
}

export default Quotes;