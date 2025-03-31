import React from "react"

// destructure the quote received as a prop
// output quote text in h3 and output the quote author
// each quote has a 'categories' property with a value of one or more categories
// map over the array for each category to tell what category a quote belongs to by looking at Quote Card

function QuoteCard({ quote }) {
    return (
        <article className="quote-card">
            <div>
                <p className="categories">{quote.categories.map((category) =>(
                    <span className="category" key={category}>{category}</span>
                ))}
                </p>
                <h3>{quote.text}</h3>
            </div>
            <footer>
                <p className="author">{quote.author}</p>
            </footer>
        </article>
    );
}

export default QuoteCard;