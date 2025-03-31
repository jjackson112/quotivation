import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Loader } from "react-feather";
import "./App.css";
import Quotes from "./components/quotes/Quotes";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading]= useState(false);
  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";
  
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
  
    // show quotes in a prettier way - no stringify, replace with rendering the Quotes component and pass it the quotes state as a props called quotes
  return (
    <div className='App'>
      <Header />
      <main>{loading === true ? <Loader /> : <Quotes quotes={quotes} />}</main>
      <Footer />
    </div>
  );
}
export default App;
