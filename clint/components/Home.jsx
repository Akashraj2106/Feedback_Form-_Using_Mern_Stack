import React from 'react'
import { Link } from 'react-router-dom'; // <-- Must import Link
const Home = () => {
  return (
    <div>
      <h1>Welcome to home page</h1>
      <Link to="/form">T0 HERE TO FILL FEEDBACK FROM</Link> |{" "}
    </div>
  )
}

export default Home
