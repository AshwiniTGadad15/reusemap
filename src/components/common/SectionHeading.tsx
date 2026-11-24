interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div>
      <span className="eyebrow"><span aria-hidden="true" className="eyebrow-dot" />{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      {description && <p className="body-copy">{description}</p>}
    </div>
  )
}
