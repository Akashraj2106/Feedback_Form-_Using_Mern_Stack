import React from 'react'
import { Link } from 'react-router-dom'; // Corrected: Added import statement for Link
const Navbar = () => {
  return (
    <div>
       <nav>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
        </nav>
    </div>
  )
}

export default Navbar;