export type ItemCategory =
  | 'Books and Education'
  | 'Clothes'
  | 'Furniture'
  | 'Electronics'
  | 'Toys'
  | 'Kitchen Items'
  | 'Home Essentials'
  | 'Sports Equipment'
  | 'Other'

export type ItemCondition = 'Like New' | 'Good' | 'Usable'

export interface Item {
  id: string
  title: string
  description: string
  category: ItemCategory
  condition: ItemCondition
  locality: string
  imageUrl: string
  imageAlt: string
  ownerName: string
  postedAt: string
}
