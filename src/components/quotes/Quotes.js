import React from "react";
import QuoteCard from "./QuoteCard";

// destructure the quotes prop and then output JSON.stringify(quotes) in div with quotes and wrapper class
// instead of JSON.strngify(quotes), map over quotes array and output one QuoteCard for each quote - pass the quote object as a prop

function Quotes () => {
    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                {Quotes.map((quote) => (
                    <QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
        </section>
    );
}

export default Quotes;