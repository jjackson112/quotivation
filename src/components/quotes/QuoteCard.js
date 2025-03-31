import React from "react"

// destructure the quote received as a prop
// output quote text in h3
// output the quote author

function QuoteCard({ quote }) {
    return (
        <article className="quote-card">
            <div>
                <h3>{quote.text}</h3>
            </div>
            <footer>
                <p className="author">{quote.author}</p>
            </footer>
        </article>
    );
}

export default QuoteCard;