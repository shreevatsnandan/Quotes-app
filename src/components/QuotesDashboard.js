import { useState, useEffect, useContext } from 'react';
import { wishlistContext } from '../context/wishlistContext';

function QuotesDashboard() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const { setFavorites, favorites } = useContext(wishlistContext);


  async function fetchQuotes() {
    try {
      let response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
      if (response.ok) {
        let quotesData = await response.json();
        setQuotes(quotesData);
      } else {
        setError('Error in fetch');
      }
    } catch (error) {
      setError('Error in fetch');
    }
  }

  useEffect(() => {
    // Check if the fetched quotes are already in favorites
    if (quotes.length > 0 && favorites.some(fav => quotes.includes(fav))) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [quotes, favorites]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  function addFav() {
    setFavorites([...favorites, ...quotes]);
    console.log(favorites);
  }

  function removeFav(){
    const newFavorites = favorites.filter(fav => !quotes.includes(fav));
    setFavorites(newFavorites);
  }

function copyItem(){
    navigator.clipboard.writeText(quotes);
}



  return (
    <div className='quotesDashboard'>
      {error ? <div className='error'>{error}</div> : (
        <div className='quotes'>
          {quotes.map((quote, index) => (
            <p key={index}>{quote}</p>
          ))}
        </div>
      )}
      <div className='all-btn'>
      <button className="refresh-btn" onClick={fetchQuotes}>
        <img src="./assets/refresh-nrml.png" alt='missing-logo' />
      </button>
      {isFav === true ?
        <button className="refresh-btn" onClick={removeFav}>
        <img src="./assets/fav-red-logo.png" alt='missing-logo' />
      </button>:
      <button className="refresh-btn" onClick={addFav}>
      <img src="./assets/fav-logo.png" alt='missing-logo' />
    </button>
      }
       <button className="refresh-btn" onClick={copyItem}>
        <img src="./assets/copy-logo.png" alt='missing-logo' />
      </button>
     
      </div>
      
     
    </div>
    
  );
}

export default QuotesDashboard;
