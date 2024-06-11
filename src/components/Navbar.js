import React from 'react'

function Navbar({ openDialog }) {
  return (
    <div className='Navbar'>
      Quotes
      <button className="refresh-btn" onClick={openDialog}><img src='./assets/wishlist-logo.png' alt='missing-logo'/></button>
    </div>
  )
}

export default Navbar
