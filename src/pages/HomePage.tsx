import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  HeartHandshake,
  Home,
  Lamp,
  Leaf,
  MoveRight,
  PackageCheck,
  Shirt,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ItemCard from '../components/items/ItemCard'
import SectionHeading from '../components/common/SectionHeading'
import { demoItems } from '../data/demoItems'

const categories = [
  { name: 'Books & learning', icon: BookOpen, query: 'Books and Education' },
  { name: 'Home & furniture', icon: Home, query: 'Furniture' },
  { name: 'Clothing', icon: Shirt, query: 'Clothes' },
  { name: 'Everyday essentials', icon: Lamp, query: 'Home Essentials' },
]

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="page-shell hero-layout">
          <div className="hero-copy">
            <span className="eyebrow"><span aria-hidden="true" className="eyebrow-dot" />A community for second chances</span>
            <h1 className="display-heading">Give Things<br />a Second Life.</h1>
            <p className="hero-description">
              Your unused items could become someone&apos;s everyday essentials. Share more.
              Waste less. Build a better community.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/login">
                Give an Item <ArrowRight size={17} />
              </Link>
              <Link className="button button-secondary" to="/explore">
                Explore Items
              </Link>
            </div>
            <div className="hero-community">
              <div aria-hidden="true" className="avatar-stack">
                <span>A</span><span>R</span><span>M</span><span>K</span>
              </div>
              <p><strong>A more generous neighbourhood</strong><br />starts with one small share.</p>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-photo-wrap">
              <img
                alt="A sunlit, welcoming living space with plants and thoughtfully reused furniture"
                className="hero-photo"
                fetchPriority="high"
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
              />
              <div className="hero-photo-shade" />
            </div>
            <div className="hero-floating-card">
              <span className="float-icon"><HeartHandshake size={20} /></span>
              <div><strong>Pass it forward</strong><span>Good things keep going.</span></div>
              <ArrowUpRight size={17} />
            </div>
            <div className="hero-leaf-mark" aria-hidden="true"><Leaf size={30} /></div>
            <span className="hero-photo-caption">Good things deserve another chapter.</span>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="featured-section section-space">
        <div className="page-shell">
          <div className="section-header">
            <SectionHeading
              description="Every item here is offered freely by a neighbour. Find something useful, or pass along something you no longer need."
              eyebrow="Good things, close by"
              title="Find your next favourite."
            />
            <Link className="text-link section-all-link" to="/explore">Explore all items <ArrowRight size={17} /></Link>
          </div>
          <div className="item-grid">
            {demoItems.slice(0, 4).map((item) => <ItemCard item={item} key={item.id} />)}
          </div>
          <p className="demo-caption"><Sparkles size={14} /> Sample listings shown for the demo preview.</p>
        </div>
      </section>

      <section className="categories-section section-space">
        <div className="page-shell">
          <div className="section-header category-header">
            <SectionHeading
              eyebrow="Explore by category"
              title="A little bit of everything."
              description="The useful things we have can be exactly what someone else needs."
            />
            <Link className="text-link" to="/explore">See all categories <ArrowRight size={17} /></Link>
          </div>
          <div className="category-grid">
            {categories.map(({ name, icon: Icon, query }, index) => (
              <Link className={`category-tile category-tone-${index + 1}`} key={name} to={`/explore?category=${encodeURIComponent(query)}`}>
                <span className="category-icon"><Icon size={22} strokeWidth={1.7} /></span>
                <span className="category-name">{name}</span>
                <ArrowUpRight className="category-arrow" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="how-section section-space">
        <div className="page-shell how-layout">
          <div className="how-intro">
            <SectionHeading
              eyebrow="A simple idea, made easy"
              title="Good things are better when shared."
              description="ReUseMap helps neighbours give useful things a new home, one thoughtful handover at a time."
            />
            <Link className="button button-secondary how-button" to="/about">Get to know us <ArrowRight size={16} /></Link>
          </div>
          <div className="steps-list">
            <div className="step-card">
              <span className="step-number">01</span>
              <span className="step-icon"><PackageCheck size={22} /></span>
              <div><h3>Share what you can</h3><p>List something useful you no longer need. It&apos;s always free to give.</p></div>
              <Check className="step-check" size={18} />
            </div>
            <div className="step-card">
              <span className="step-number">02</span>
              <span className="step-icon"><UsersRound size={22} /></span>
              <div><h3>Find a new neighbour</h3><p>People nearby can discover your item and ask to give it a new home.</p></div>
              <Check className="step-check" size={18} />
            </div>
            <div className="step-card">
              <span className="step-number">03</span>
              <span className="step-icon"><HeartHandshake size={22} /></span>
              <div><h3>Pass it forward</h3><p>Arrange a convenient handover and keep something good in use.</p></div>
              <Check className="step-check" size={18} />
            </div>
          </div>
        </div>
      </section>

      <section className="impact-preview section-space">
        <div className="page-shell impact-layout">
          <div className="impact-intro">
            <span className="eyebrow"><span aria-hidden="true" className="eyebrow-dot" />Community impact</span>
            <h2 className="section-heading">Meaningful impact starts with honest numbers.</h2>
            <p className="body-copy">We&apos;ll share community totals once real handovers can be verified. No estimates, no made-up milestones.</p>
          </div>
          <div className="impact-metrics" aria-label="Community impact metrics pending verified data">
            <div className="impact-metric"><strong>—</strong><span>Items shared</span></div>
            <div className="impact-metric"><strong>—</strong><span>Verified handovers</span></div>
            <div className="impact-metric"><strong>—</strong><span>Neighbours involved</span></div>
            <p><Check size={14} /> Real community data will be added in a future milestone.</p>
          </div>
        </div>
      </section>

      <section className="community-section section-space" id="community">
        <div className="page-shell community-layout">
          <div>
            <span className="eyebrow eyebrow-on-dark"><span aria-hidden="true" className="eyebrow-dot" />Small acts, shared widely</span>
            <h2 className="community-heading">A kinder way to<br />keep good things going.</h2>
            <p className="community-copy">Every shared item is a little reminder: caring for our community can start right at home.</p>
            <Link className="button button-light" to="/register">Be part of it <MoveRight size={17} /></Link>
          </div>
          <div className="community-note">
            <div className="community-note-icon"><Leaf size={25} /></div>
            <p>Reuse starts with people.</p>
            <span>Connect with your neighbourhood and give useful things another chapter.</span>
            <div className="note-line" />
            <small>Give Things a Second Life.</small>
          </div>
        </div>
        <div className="community-decoration" aria-hidden="true">R</div>
      </section>

      <section className="sustainability-strip">
        <div className="page-shell sustain-content">
          <span className="sustain-icon"><Leaf size={22} /></span>
          <div><strong>Reuse is a good place to begin.</strong><p>No big promises. Just useful things finding their way to someone who needs them.</p></div>
          <Link className="text-link" to="/about">Why reuse matters <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  )
}
