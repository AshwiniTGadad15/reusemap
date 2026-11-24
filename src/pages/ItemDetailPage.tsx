import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock3, MapPin, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { demoItems } from '../data/demoItems'
import NotFoundPage from './NotFoundPage'

export default function ItemDetailPage() {
  const { itemId } = useParams()
  const item = demoItems.find((candidate) => candidate.id === itemId)

  if (!item) return <NotFoundPage />

  return (
    <section className="page-shell detail-page">
      <Link className="detail-back text-link" to="/explore"><ArrowLeft size={17} /> Back to explore</Link>
      <div className="detail-layout">
        <div className="detail-image-wrap">
          <img alt={item.imageAlt} className="detail-image" src={item.imageUrl} />
          <span className="detail-image-badge"><CheckCircle2 size={15} /> Free to a neighbour</span>
        </div>
        <div className="detail-content">
          <span className="eyebrow"><span aria-hidden="true" className="eyebrow-dot" />{item.category}</span>
          <h1 className="detail-title">{item.title}</h1>
          <div className="detail-locality"><MapPin size={17} />{item.locality}<span>·</span><span>Approximate area only</span></div>
          <p className="detail-description">{item.description}</p>
          <div className="detail-condition">
            <span><ShieldCheck size={17} /> Condition</span><strong>{item.condition}</strong>
          </div>
          <div className="detail-owner">
            <span className="owner-avatar">{item.ownerName.charAt(0)}</span>
            <div><strong>Shared by {item.ownerName}</strong><span><Clock3 size={13} /> Listed {item.postedAt}</span></div>
          </div>
          <Link className="button button-primary detail-request" to="/login">
            I&apos;m interested <ArrowUpRight size={17} />
          </Link>
          <p className="detail-demo-note">Demo preview: requests and handovers are not connected yet.</p>
          <div className="privacy-note"><ShieldCheck size={17} /><span>Neighbourhood shown approximately. Private addresses are never displayed.</span></div>
        </div>
      </div>
    </section>
  )
}
