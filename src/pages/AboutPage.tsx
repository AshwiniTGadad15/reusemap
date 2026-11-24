import { ArrowRight, HeartHandshake, Leaf, Recycle, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { icon: HeartHandshake, title: 'People before things', text: 'A useful item can mean a lot to the person who needs it. Sharing brings neighbours a little closer.' },
  { icon: Recycle, title: 'Use what we already have', text: 'Keeping good things in use is a practical, everyday way to make more thoughtful choices.' },
  { icon: UsersRound, title: 'Community makes it possible', text: 'ReUseMap is built around generosity, trust and the small connections that make a neighbourhood.' },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="page-shell about-hero-inner">
          <span className="eyebrow"><span aria-hidden="true" className="eyebrow-dot" />Why ReUseMap</span>
          <h1 className="section-heading">A better home for the things we no longer need.</h1>
          <p className="body-copy">ReUseMap is a community-powered idea with a simple purpose: help useful things find the people who can use them next.</p>
          <Link className="button button-primary" to="/explore">See what can be shared <ArrowRight size={17} /></Link>
        </div>
      </section>
      <section className="page-shell about-values section-space">
        <div className="section-header">
          <div><span className="eyebrow"><span aria-hidden="true" className="eyebrow-dot" />What we believe</span><h2 className="section-heading">Small choices. Shared impact.</h2></div>
          <p className="body-copy">We believe a more sustainable future can start with something simple: passing along what still has life in it.</p>
        </div>
        <div className="values-grid">
          {values.map(({ icon: Icon, title, text }) => (
            <article className="value-card" key={title}>
              <span className="value-icon"><Icon size={22} /></span>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-cta">
        <div className="page-shell about-cta-inner">
          <Leaf aria-hidden="true" size={25} />
          <div><h2>Have something useful to pass along?</h2><p>Every second life begins with the choice to share.</p></div>
          <Link className="button button-light" to="/login">Give an Item <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
