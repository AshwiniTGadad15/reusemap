import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ItemCard from '../components/items/ItemCard'
import { demoItems, itemCategories } from '../data/demoItems'

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(searchParams.get('category') ?? 'All categories')
  const [locality, setLocality] = useState('All neighbourhoods')
  const localities = useMemo(
    () => ['All neighbourhoods', ...new Set(demoItems.map((item) => item.locality))],
    [],
  )
  const filteredItems = useMemo(() => {
    const term = query.trim().toLocaleLowerCase()
    return demoItems.filter((item) => {
      const matchesQuery = !term || `${item.title} ${item.description} ${item.category} ${item.locality}`.toLocaleLowerCase().includes(term)
      const matchesCategory = category === 'All categories' || item.category === category
      const matchesLocality = locality === 'All neighbourhoods' || item.locality === locality
      return matchesQuery && matchesCategory && matchesLocality
    })
  }, [category, locality, query])

  const updateCategory = (value: string) => {
    setCategory(value)
    if (value === 'All categories') setSearchParams({})
    else setSearchParams({ category: value })
  }

  const clearFilters = () => {
    setQuery('')
    setLocality('All neighbourhoods')
    updateCategory('All categories')
  }

  const hasFilters = query !== '' || category !== 'All categories' || locality !== 'All neighbourhoods'

  return (
    <div className="explore-page">
      <section className="explore-hero">
        <div className="page-shell explore-hero-inner">
          <span className="eyebrow"><span aria-hidden="true" className="eyebrow-dot" />A second life starts here</span>
          <h1 className="section-heading">Find something<br className="mobile-break" /> lovely nearby.</h1>
          <p className="body-copy">Explore useful things your neighbours are ready to pass along. Everything is free, always.</p>
          <div className="explore-search-wrap">
            <Search aria-hidden="true" size={19} />
            <label className="sr-only" htmlFor="item-search">Search items and neighbourhoods</label>
            <input
              autoComplete="off"
              id="item-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try “books”, “chair” or a neighbourhood"
              type="search"
              value={query}
            />
            {query && <button aria-label="Clear search" className="search-clear" onClick={() => setQuery('')} type="button"><X size={16} /></button>}
          </div>
        </div>
      </section>
      <section className="page-shell explore-results section-space">
        <div className="explore-toolbar">
          <div>
            <h2 className="results-title">Free finds, shared nearby</h2>
            <p className="results-subtitle">{filteredItems.length} sample {filteredItems.length === 1 ? 'listing' : 'listings'} to explore</p>
          </div>
          <div aria-label="Filter items" className="filter-controls">
            <label className="filter-select-wrap">
              <SlidersHorizontal aria-hidden="true" size={16} />
              <span className="sr-only">Filter by category</span>
              <select onChange={(event) => updateCategory(event.target.value)} value={category}>
                {itemCategories.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <label className="filter-select-wrap">
              <span className="sr-only">Filter by neighbourhood</span>
              <select onChange={(event) => setLocality(event.target.value)} value={locality}>
                {localities.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            {hasFilters && <button className="clear-filters" onClick={clearFilters} type="button">Clear</button>}
          </div>
        </div>
        {filteredItems.length > 0 ? (
          <div className="item-grid explore-grid">
            {filteredItems.map((item) => <ItemCard item={item} key={item.id} />)}
          </div>
        ) : (
          <div className="empty-state">
            <span><Search size={22} /></span>
            <h3>No items found just yet</h3>
            <p>Try a different search or clear a filter to see more of the demo listings.</p>
            <button className="button button-secondary" onClick={clearFilters} type="button">Clear filters</button>
          </div>
        )}
        <p className="demo-caption"><SlidersHorizontal size={14} /> Demo listings only. Real community listings are coming in a future milestone.</p>
      </section>
    </div>
  )
}
