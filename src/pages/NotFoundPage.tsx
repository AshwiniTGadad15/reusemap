import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="page-shell not-found-page">
      <span className="not-found-number">404</span>
      <h1 className="section-heading">This little corner is empty.</h1>
      <p className="body-copy">The page or item you were looking for may have moved on to a new home.</p>
      <Link className="button button-primary" to="/explore"><ArrowLeft size={17} /> Explore items</Link>
    </section>
  )
}
