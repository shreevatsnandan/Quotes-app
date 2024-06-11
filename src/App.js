import './App.css';
import Navbar from './components/Navbar';
import QuotesDashboard from './components/QuotesDashboard';
import { useState } from 'react';
import { wishlistContext } from './context/wishlistContext';
import WishlistQuotes from './components/WishlistQuotes';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="App">
      <wishlistContext.Provider value={{ favorites, setFavorites }}>
      <Navbar openDialog={openDialog} />
        <QuotesDashboard />
        {isDialogOpen && <WishlistQuotes closeDialog={closeDialog} />}
      </wishlistContext.Provider>
    </div>
  );
}

export default App;
