import React from 'react'
import './PageNotFound.css'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
       <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oop's... - Page Not Found</p>
      <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link">Go to Home</Link>
      <br/>
    </div><br/>
    </div>
  )
}

export default PageNotFound
