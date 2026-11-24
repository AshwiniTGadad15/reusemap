import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Item } from '../../types/item'

interface ItemCardProps {
  item: Item
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <article className="item-card">
      <Link aria-label={`View ${item.title}`} className="item-image-link" to={`/items/${item.id}`}>
        <img alt={item.imageAlt} className="item-card-image" loading="lazy" src={item.imageUrl} />
        <span className="item-category-tag">{item.category}</span>
      </Link>
      <div className="item-card-content">
        <div className="item-card-title-row">
          <Link className="item-card-title" to={`/items/${item.id}`}>{item.title}</Link>
          <ArrowUpRight aria-hidden="true" className="item-card-arrow" size={17} />
        </div>
        <div className="item-card-meta">
          <span><MapPin size={14} />{item.locality}</span>
          <span>{item.condition}</span>
        </div>
        <div className="item-card-footer">
          <span>Shared by {item.ownerName}</span>
          <span>{item.postedAt}</span>
        </div>
      </div>
    </article>
  )
}
