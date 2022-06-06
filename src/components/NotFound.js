import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return(<div className="nf">
    <h1>404 Page Not Found</h1>
    <Link to="/" className="nfb"> Northwest Animal Hospital Home Page</Link>
  </div>
)};