import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";                                 

// remove JSON.stringify and output ul instead
// map over favorite quotes and output one favorite quote card for each favorite quote
// key can be quote.id since it's unique, pass entire quote
// add index to quote in map array and listPosition prop to FavoriteQuoteCard component

const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {
    return (
        <section className="favorite-quotes">   
             <div className="wrapper quotes">
                <h3>Top 3 Favorite Quotes</h3>
                    {favoriteQuotes.length > 0 && (
                        <ul>
                            {favoriteQuotes.map((quote, index) => (
                                <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites} listPosition={index + 1} />
                            ))}
                        </ul>
                    )}
                <div className="favorite-quotes-description">
                    <p>You can add up to three favorites by selecting from the options below.<br />
                    Once you choose, they will appear here.</p>
                </div>
            </div>
        </section>
    );
}

export default FavoriteQuotes;