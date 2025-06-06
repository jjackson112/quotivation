import React from "react"
import { Heart } from "react-feather";

// destructure the quote received as a prop
// output quote text in h3 and output the quote author
// each quote has a 'categories' property with a value of one or more categories
// map over the array for each category to tell what category a quote belongs to by looking at Quote Card

// update QuoteCard component to be selected - import heart icon
// destructure addToFavorites function & pass along quoteId as an argument - check console for quote id, create onClick handler to call when clicked

// fill out background color of heart icon when clicked (stylized components - fill value property) - make it obvious that it's added to favorites

const QuoteCard = ({ quote, addToFavorites, favoriteQuotes }) => {
    // find method (element) => return first array element - quote already in the favoriteQuotes array
    const alreadyFavorite = favoriteQuotes.find((favorite) => favorite.id === quote.id);
    const faveStyle = alreadyFavorite ? "#333" : "";
    
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
                <p className="add-favorite" onClick={() => addToFavorites(quote.id)}><Heart style={{ fill: faveStyle }}/></p>
            </footer>
        </article>
    );
}

export default QuoteCard;