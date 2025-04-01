import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Loader } from "react-feather";
import Quotes from "./components/quotes/Quotes";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes";
import Message from "./components/Message";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";
  
  // create state for categories
  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];

  // how to favorite quotes
  const maxFaves = 3;

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(quotesUrl);
      const result = await response.json();
      setQuotes(result);
    } catch (error) {
      console.log("There's been an error.", error);
    }
    setLoading(false);
  };
    // will only run once
    useEffect (() => {
      fetchQuotes();
    }, []);

    // update our state for filtered quotes - ternary operator
    // if category state equals all, then pass all quotes 
    // if category state doesn't equal all, then pass the quotes that belong to that category alone
    // every quote has a category attribute that's an array of categories - includes
    const filteredQuotes = category !== "All" ? quotes.filter(quote => quote.categories.includes(category)) : quotes;

    // update state so you can select different categories and pass it to quotes
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    }

  // function will accept a quoteId to find that specific quote from the quotes array
    const addToFavorites = (quoteId) => {
    // console.log(`In favorite quotes with id ${quoteId}`);
    // find the quote who's id matches the quote id that was passed to favorites
      const selectedQuote = quotes.find((quote) => quote.id === quoteId);
    // console.log(selectedQuote); - log it out to test

    // what if your selectedQuote is already in the favoriteQuotes array - you don't want to add it again
      const alreadyFavorite = favoriteQuotes.find((favorite) => favorite.id === selectedQuote.id);
    // console.log(alreadyFavorite); - get undefined and added to favorites; give if/else statement an else if one

      if (alreadyFavorite) {
        console.log("This quote is already n your favorites! Choose another!");
      } else if (favoriteQuotes.length < maxFaves) {
        setFavoriteQuotes([...favoriteQuotes, selectedQuote])
        console.log("Added to Favorites!");
      } else {
        console.log("Max number of favorite quotes reached. Please delete one to add another!");
      }
  }
    // delete a Favorite Quote
    // pass it a quote id so that you know which quote to remove
    // filter through fav quotes and update favoriteQuotes state
    // make sure the quote id is not the same as the quote id that's been passed
    // the result should be an array in favorites that doesn't have the quote id that was passed, removing the quote id that was clicked
     const removeFromFavorites = (quoteId) => {
        const newFavorites = favoriteQuotes.filter((quote) => quote.id !== quoteId)
        setFavoriteQuotes(newFavorites);
     }
    
    // show quotes in a prettier way - no stringify, replace with rendering the Quotes component and pass it the quotes state as a props called quotes
    // add 2 new props to Quotes component - categories array and category state
    // instead of passing all quotes, pass filteredQuotes function
    return (
    <div className='App'>
      <Header />
      <main>
        <FavoriteQuotes favoriteQuotes={favoriteQuotes} maxFaves={maxFaves} removeFromFavorites={removeFromFavorites}/>
          {loading ? <Loader /> : <Quotes filteredQuotes={filteredQuotes} category={category} categories={categories} handleCategoryChange={handleCategoryChange} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes} />}
      </main>
      <Footer />
    </div>
  );
}
export default App;
