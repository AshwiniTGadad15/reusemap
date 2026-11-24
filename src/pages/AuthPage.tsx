import { useState, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, Leaf, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'

interface AuthPageProps {
  mode: 'login' | 'register'
}

export default function AuthPage({ mode }: AuthPageProps) {
  const isRegister = mode === 'register'
  const [notice, setNotice] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNotice('Account access is not connected in this demo. Your details have not been sent or saved.')
  }

  return (
    <section className="auth-page">
      <div className="auth-visual">
        <img
          alt="A bright, welcoming home filled with natural light and greenery"
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=82"
        />
        <div className="auth-visual-shade" />
        <Link className="auth-brand" to="/">
          <span className="brand-mark"><Leaf size={20} /></span><span className="brand-word">ReUse<span>Map</span></span>
        </Link>
        <div className="auth-visual-copy">
          <span className="eyebrow eyebrow-on-dark"><span aria-hidden="true" className="eyebrow-dot" />Good things keep going</span>
          <h1>Be part of a more thoughtful kind of sharing.</h1>
          <p>Useful things deserve another chapter — and every chapter starts with a neighbour.</p>
        </div>
        <span className="auth-image-credit">Demo preview imagery</span>
      </div>
      <div className="auth-panel">
        <div className="auth-panel-inner">
          <Link className="auth-back text-link" to="/"><ArrowLeft size={16} /> Back to home</Link>
          <div className="auth-form-heading">
            <span className="eyebrow"><span aria-hidden="true" className="eyebrow-dot" />A little good goes a long way</span>
            <h2>{isRegister ? 'Join the community.' : 'Welcome back.'}</h2>
            <p>{isRegister ? 'Create an account to make sharing part of your everyday.' : 'Sign in to continue your ReUseMap journey.'}</p>
          </div>
          {notice && <div aria-live="polite" className="form-notice"><LockKeyhole size={17} />{notice}</div>}
          <form className="auth-form" onSubmit={handleSubmit}>
            {isRegister && (
              <div>
                <label className="field-label" htmlFor="full-name">Your name</label>
                <input autoComplete="name" className="form-control" id="full-name" name="name" placeholder="How should we call you?" required />
              </div>
            )}
            <div>
              <label className="field-label" htmlFor="email">Email address</label>
              <input autoComplete="email" className="form-control" id="email" name="email" placeholder="you@example.com" required type="email" />
            </div>
            <div>
              <label className="field-label" htmlFor="password">Password</label>
              <input autoComplete={isRegister ? 'new-password' : 'current-password'} className="form-control" id="password" minLength={8} name="password" placeholder="At least 8 characters" required type="password" />
            </div>
            {isRegister && (
              <label className="consent-label">
                <input required type="checkbox" />
                <span>I agree to keep ReUseMap kind, respectful and free to use.</span>
              </label>
            )}
            <button className="button button-primary auth-submit" type="submit">
              {isRegister ? 'Create my account' : 'Log in'} <ArrowRight size={17} />
            </button>
          </form>
          <p className="auth-switch">
            {isRegister ? 'Already have an account?' : 'New to ReUseMap?'}
            {' '}<Link to={isRegister ? '/login' : '/register'}>{isRegister ? 'Log in' : 'Get started'}</Link>
          </p>
          <p className="auth-demo-disclaimer"><LockKeyhole size={14} /> Authentication will be connected in a future milestone. This form does not transmit or store information.</p>
        </div>
      </div>
    </section>
  )
}
