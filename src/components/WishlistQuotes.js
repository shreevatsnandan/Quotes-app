import React, {  useContext,useEffect, useRef } from 'react';
import { wishlistContext } from '../context/wishlistContext';

function WishlistQuotes({ closeDialog }) {
    const dialogRef = useRef();
    const { favorites } = useContext(wishlistContext);
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        closeDialog();
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
      <div className="dialog-overlay">
        <div className="dialog-box" ref={dialogRef}>
          <h2>Saved Quotes</h2>
          {favorites.map((quote, index) => (
            <p key={index}>{index+1}. {quote}</p>
          ))}
        </div>
      </div>
    );
  }
  

export default WishlistQuotes
